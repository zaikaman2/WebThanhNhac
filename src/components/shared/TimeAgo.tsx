'use client'

import { formatDistanceToNow } from 'date-fns'
import { vi } from 'date-fns/locale'

interface TimeAgoProps {
  date: string
}

export default function TimeAgo({ date }: TimeAgoProps) {
  return (
    <span>
      {formatDistanceToNow(new Date(date), { addSuffix: true, locale: vi })}
    </span>
  )
} 