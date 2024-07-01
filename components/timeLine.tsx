// components/TimelineItem.tsx
'use client'

import React, { useState } from 'react'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import useIntersectionObserver from '../data/hooks/useIntersectionObserver'

interface TimelineItemProps {
  index: number
  date: string
  title: string
  description: string
}

const TimelineItem: React.FC<TimelineItemProps> = ({ index, date, title, description }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useIntersectionObserver(() => setIsVisible(true))

  const isLeft = index % 2 === 0
  const icon =
    index % 2 === 0 ? (
      <AcademicCapIcon className="h-6 w-6" />
    ) : (
      <BriefcaseIcon className="h-6 w-6" />
    )

  return (
    <div
      ref={ref}
      className={`flex ${isLeft ? 'justify-start' : 'justify-end'} relative mb-8 transform transition-transform duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <div className="relative rounded-lg bg-gradient-to-r from-blue-500 to-green-500 p-6 shadow-lg">
          <div className="mb-1 flex items-center">
            <span className="font-medium text-white">{date}</span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
      <div
        className={`absolute top-0 ${isLeft ? 'right-1/2 mr-4' : 'left-1/2 ml-4'} flex h-full items-center`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default TimelineItem
