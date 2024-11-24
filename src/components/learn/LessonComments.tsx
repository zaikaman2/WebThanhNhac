'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@/hooks/useUser'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'
import { MessageCircle, ThumbsUp, Reply, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'
import TimeAgo from '@/components/shared/TimeAgo'
import Avatar from '@/components/shared/Avatar'

interface Comment {
  id: string
  user_id: string
  content: string
  likes: number
  created_at: string
  updated_at: string
  parent_id: string | null
  user: {
    name: string
    avatar_url: string | null | undefined
  }
  liked_by_user: boolean
}

interface CommentResponse {
  id: string
  user_id: string
  content: string
  likes: number
  created_at: string
  updated_at: string
  parent_id: string | null
  profile: {
    name: string | null
    avatar_url: string | null
  } | null
}

interface LessonCommentsProps {
  courseType: 'basic' | 'intermediate'
  lessonId: number
}

function CommentItem({ 
  comment, 
  onReply, 
  onDelete, 
  onLike,
  currentUserId,
  replies,
  level = 0,
  onAddReply,
  replyingTo,
}: { 
  comment: Comment
  onReply: (commentId: string) => void
  onDelete: (commentId: string) => void
  onLike: (commentId: string) => void
  currentUserId: string | undefined
  replies: Comment[]
  level?: number
  onAddReply: (parentId: string, content: string) => void
  replyingTo: string | null
}) {
  const [replyContent, setReplyContent] = useState('')

  const handleSubmitReply = () => {
    if (replyContent.trim()) {
      onAddReply(comment.id, replyContent.trim())
      setReplyContent('')
      onReply('')
    }
  }

  return (
    <div className={`${level > 0 ? 'ml-8 mt-4' : ''}`}>
      <div className="bg-secondary-light rounded-lg p-4">
        <div className="flex gap-4">
          <Avatar url={comment.user.avatar_url || undefined} size={40} />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-gray-200">{comment.user.name}</span>
                <span className="text-gray-400 text-sm ml-2">
                  <TimeAgo date={comment.created_at} />
                </span>
              </div>
              {currentUserId === comment.user_id && (
                <button
                  onClick={() => onDelete(comment.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-gray-300 mt-2">{comment.content}</p>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => onLike(comment.id)}
                className={`flex items-center gap-1 transition-colors ${
                  comment.liked_by_user 
                    ? 'text-primary' 
                    : 'text-gray-400 hover:text-primary'
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
                {comment.likes > 0 && <span>{comment.likes}</span>}
              </button>
              {level < 2 && (
                <button
                  onClick={() => onReply(replyingTo === comment.id ? '' : comment.id)}
                  className="text-gray-400 hover:text-primary flex items-center gap-1 transition-colors"
                >
                  <Reply className="w-4 h-4" />
                  Trả lời
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reply input form */}
      {replyingTo === comment.id && (
        <div className="mt-2 ml-8">
          <div className="flex gap-2">
            <textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Viết trả lời..."
              className="flex-1 p-2 bg-secondary-light rounded-lg border border-primary/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-primary/30"
              rows={2}
            />
            <div className="flex flex-col gap-2">
              <button
                onClick={handleSubmitReply}
                disabled={!replyContent.trim()}
                className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Gửi
              </button>
              <button
                onClick={() => onReply('')}
                className="px-4 py-2 text-sm text-gray-400 hover:text-gray-300"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Replies */}
      {replies.length > 0 && (
        <div className="space-y-4">
          {replies.map(reply => (
            <CommentItem
              key={reply.id}
              comment={reply}
              onReply={onReply}
              onDelete={onDelete}
              onLike={onLike}
              currentUserId={currentUserId}
              replies={[]}
              level={level + 1}
              onAddReply={onAddReply}
              replyingTo={replyingTo}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function LessonComments({ courseType, lessonId }: LessonCommentsProps) {
  const { user } = useUser()
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadComments()
  }, [courseType, lessonId])

  async function loadComments() {
    try {
      console.log('Loading comments for:', { courseType, lessonId })

      if (!courseType || !lessonId) {
        console.error('Missing required params:', { courseType, lessonId })
        return
      }

      // Đầu tiên lấy comments
      const { data: comments, error: commentsError } = await supabase
        .from('lesson_comments')
        .select('*')
        .eq('course_type', courseType)
        .eq('lesson_id', lessonId)
        .order('created_at', { ascending: false })

      if (commentsError) {
        console.error('Comments error:', commentsError)
        throw commentsError
      }

      if (!comments) {
        setComments([])
        return
      }

      // Sau đó lấy thông tin profiles của tất cả user_ids
      const userIds = [...new Set(comments.map(c => c.user_id))]
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('id, name, avatar_url')
        .in('id', userIds)

      if (profilesError) {
        console.error('Profiles error:', profilesError)
        throw profilesError
      }

      // Map profiles vào một object để dễ truy cập
      const profilesMap = (profiles || []).reduce((acc, profile) => ({
        ...acc,
        [profile.id]: profile
      }), {} as Record<string, any>)

      // Lấy thông tin like của user hiện tại nếu đã đăng nhập
      let userLikes: Record<string, boolean> = {}
      if (user) {
        const { data: likes, error: likesError } = await supabase
          .from('comment_likes')
          .select('comment_id')
          .eq('user_id', user.id)
          .in('comment_id', comments.map(c => c.id))

        if (likesError) throw likesError

        userLikes = (likes || []).reduce((acc, like) => ({
          ...acc,
          [like.comment_id]: true
        }), {})
      }

      // Kết hợp data với thông tin like
      const formattedComments: Comment[] = comments.map(comment => {
        const profile = profilesMap[comment.user_id]
        
        return {
          id: comment.id,
          user_id: comment.user_id,
          content: comment.content,
          likes: comment.likes || 0,
          created_at: comment.created_at,
          updated_at: comment.updated_at,
          parent_id: comment.parent_id,
          user: {
            name: profile?.name || 'Người dùng',
            avatar_url: profile?.avatar_url
          },
          liked_by_user: !!userLikes[comment.id]
        }
      })

      console.log('Formatted comments:', formattedComments)
      setComments(formattedComments)
    } catch (error) {
      console.error('Error loading comments:', error)
      toast.error('Không thể tải bình luận')
    } finally {
      setLoading(false)
    }
  }

  async function handleAddComment() {
    if (!user || !newComment.trim()) return

    try {
      const { error } = await supabase
        .from('lesson_comments')
        .insert([
          {
            user_id: user.id,
            course_type: courseType,
            lesson_id: lessonId,
            content: newComment.trim(),
            parent_id: replyingTo
          }
        ])

      if (error) throw error

      setNewComment('')
      setReplyingTo(null)
      loadComments()
      toast.success('Đã thêm bình luận')
    } catch (error) {
      console.error('Error adding comment:', error)
      toast.error('Không thể thêm bình luận')
    }
  }

  async function handleLikeComment(commentId: string) {
    if (!user) {
      toast.error('Vui lòng đăng nhập để thực hiện thao tác này')
      return
    }

    try {
      const comment = comments.find(c => c.id === commentId)
      if (!comment) return

      if (comment.liked_by_user) {
        // Unlike: Xóa record trong comment_likes và giảm số likes
        const { error: unlikeError } = await supabase
          .from('comment_likes')
          .delete()
          .eq('comment_id', commentId)
          .eq('user_id', user.id)

        if (unlikeError) throw unlikeError

        const { error: updateError } = await supabase
          .from('lesson_comments')
          .update({ likes: Math.max(0, (comment.likes || 1) - 1) })
          .eq('id', commentId)

        if (updateError) throw updateError
      } else {
        // Like: Thêm record vào comment_likes và tăng số likes
        const { error: likeError } = await supabase
          .from('comment_likes')
          .insert([
            {
              comment_id: commentId,
              user_id: user.id,
              created_at: new Date().toISOString()
            }
          ])

        if (likeError) throw likeError

        const { error: updateError } = await supabase
          .from('lesson_comments')
          .update({ likes: (comment.likes || 0) + 1 })
          .eq('id', commentId)

        if (updateError) throw updateError
      }

      loadComments()
    } catch (error) {
      console.error('Error handling like:', error)
      toast.error('Không thể thực hiện thao tác này')
    }
  }

  async function handleDeleteComment(commentId: string) {
    if (!user) return

    try {
      const { error } = await supabase
        .from('lesson_comments')
        .delete()
        .eq('id', commentId)
        .eq('user_id', user.id)

      if (error) throw error

      loadComments()
      toast.success('Đã xóa bình luận')
    } catch (error) {
      console.error('Error deleting comment:', error)
      toast.error('Không thể xóa bình luận')
    }
  }

  async function handleAddReply(parentId: string, content: string) {
    if (!user) return

    try {
      const { error } = await supabase
        .from('lesson_comments')
        .insert([
          {
            user_id: user.id,
            course_type: courseType,
            lesson_id: lessonId,
            content: content,
            parent_id: parentId
          }
        ])

      if (error) throw error

      loadComments()
      toast.success('Đã thêm trả lời')
    } catch (error) {
      console.error('Error adding reply:', error)
      toast.error('Không thể thêm trả lời')
    }
  }

  // Tổ chức comments thành cây
  const organizedComments = comments.reduce((acc, comment) => {
    if (!comment.parent_id) {
      acc.root.push(comment)
    } else {
      if (!acc.replies[comment.parent_id]) {
        acc.replies[comment.parent_id] = []
      }
      acc.replies[comment.parent_id].push(comment)
    }
    return acc
  }, { root: [] as Comment[], replies: {} as Record<string, Comment[]> })

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-primary mb-4">Bình luận</h2>
      
      {user && (
        <div className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Viết bình luận..."
            className="w-full p-3 bg-secondary-light rounded-lg border border-primary/10 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-primary/30"
            rows={3}
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={handleAddComment}
              disabled={!newComment.trim()}
              className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Bình luận
            </button>
          </div>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {loading ? (
          <div className="text-center text-gray-400">Đang tải bình luận...</div>
        ) : organizedComments.root.length > 0 ? (
          organizedComments.root.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              onReply={setReplyingTo}
              onDelete={handleDeleteComment}
              onLike={handleLikeComment}
              currentUserId={user?.id}
              replies={organizedComments.replies[comment.id] || []}
              onAddReply={handleAddReply}
              replyingTo={replyingTo}
            />
          ))
        ) : (
          <div className="text-center text-gray-400">Chưa có bình luận nào</div>
        )}
      </div>
    </div>
  )
} 