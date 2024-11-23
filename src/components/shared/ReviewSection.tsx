import { Star } from 'lucide-react'
import SlideIn from './SlideIn'

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  date: string
}

interface ReviewSectionProps {
  reviews: Review[]
  averageRating: number
}

export default function ReviewSection({ reviews, averageRating }: ReviewSectionProps) {
  return (
    <section className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn direction="up">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
            Đánh giá từ học viên
          </h2>
        </SlideIn>

        <div className="bg-secondary-light p-8 rounded-xl border border-primary/10 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">{averageRating}</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(averageRating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <div className="text-gray-300">{reviews.length} đánh giá</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <SlideIn key={review.id} direction="up" delay={index * 100}>
              <div className="bg-secondary-light p-6 rounded-xl border border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-300">{review.comment}</p>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  )
} 