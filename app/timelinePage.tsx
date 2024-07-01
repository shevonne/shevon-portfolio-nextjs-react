// app/timelinePage.tsx
'use client'

import React from 'react'
import TimelineItem from '../components/timeLine'

const timelineData = [
  { date: '2023', title: 'Title 1', description: 'Description 1' },
  { date: '2022', title: 'Title 2', description: 'Description 2' },
  { date: '2021', title: 'Title 3', description: 'Description 3' },
  { date: '2021', title: 'Title 3', description: 'Description 3' },
  { date: '2021', title: 'Title 3', description: 'Description 3' },
  { date: '2021', title: 'Title 3', description: 'Description 3' },
  { date: '2021', title: 'Title 3', description: 'Description 3' },
  // 添加更多条目
]

const TimelinePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-10">
      <div className="absolute left-1/2 h-full w-px -translate-x-1/2 transform bg-gray-300"></div>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          index={index}
          date={item.date}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  )
}

export default TimelinePage
