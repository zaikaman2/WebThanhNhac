'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, PlayCircle, CheckCircle } from 'lucide-react'

interface Lesson {
  id: number
  title: string
  duration: string
  completed?: boolean
}

interface Section {
  title: string
  lessons: Lesson[]
}

interface CourseContentProps {
  sections: Section[]
  currentLessonId: number
  onSelectLesson: (lessonId: number) => void
}

export default function CourseContent({ sections, currentLessonId, onSelectLesson }: CourseContentProps) {
  const [expandedSections, setExpandedSections] = useState<number[]>([0]) // First section expanded by default
  
  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }
  
  return (
    <div className="bg-secondary-light rounded-lg">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="border-b border-primary/10 last:border-0">
          <button
            onClick={() => toggleSection(sectionIndex)}
            className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-secondary-darker transition-colors"
          >
            <h3 className="font-semibold text-primary">{section.title}</h3>
            {expandedSections.includes(sectionIndex) ? (
              <ChevronUp className="text-primary" />
            ) : (
              <ChevronDown className="text-primary" />
            )}
          </button>
          
          {expandedSections.includes(sectionIndex) && (
            <div className="px-4 pb-3">
              {section.lessons.map(lesson => (
                <button
                  key={lesson.id}
                  onClick={() => onSelectLesson(lesson.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    currentLessonId === lesson.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'hover:bg-secondary-darker text-gray-300'
                  }`}
                >
                  {lesson.completed ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <PlayCircle className="w-5 h-5" />
                  )}
                  <span className="flex-1 text-left">{lesson.title}</span>
                  <span className="text-sm opacity-60">{lesson.duration}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 