'use client'

import { formatDistanceToNow } from 'date-fns'
import { vi } from 'date-fns/locale'

interface TimeAgoProps {
  date: string
}

export default function TimeAgo({ date }: TimeAgoProps) {
  try {
    // Ensure date is in ISO format
    const dateObj = new Date(date)
    
    // Check if date is valid
    if (isNaN(dateObj.getTime())) {
      return <span className="text-gray-400">Vừa xong</span>
    }
    
    return (
      <span>
        {formatDistanceToNow(dateObj, { addSuffix: true, locale: vi })}
      </span>
    )
  } catch (error) {
    return <span className="text-gray-400">Vừa xong</span>
  }
} 