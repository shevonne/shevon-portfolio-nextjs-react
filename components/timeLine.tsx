'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
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

  return (
    <div ref={ref} className="relative mb-8 flex items-center justify-between">
      {isLeft ? (
        <>
          {/* 左侧显示年份 */}
          <div className="flex w-1/2 flex-row items-center justify-end pr-4">
            <span className="mb-2 font-medium text-gray-800">{date}</span>
            {/* 圆点 */}
            <motion.div
              className="mb-2 h-6 w-6 rounded-full border-2 border-gray-800"
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: isVisible ? 'black' : 'white',
                zIndex: 10,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          {/* 右侧显示详细信息 */}
          <div className="w-1/2 pl-8 text-left">
            <div className="relative rounded-lg border border-gray-800 bg-transparent p-6 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* 左侧显示详细信息 */}
          <div className="w-1/2 pr-8 text-right">
            <div className="relative rounded-lg border border-gray-800 bg-transparent p-6 shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
          {/* 右侧显示年份 */}
          <div className="flex w-1/2 flex-row items-center pl-4">
            <motion.div
              className="mb-2 h-6 w-6 rounded-full border-2 border-gray-800"
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: isVisible ? 'black' : 'white',
                zIndex: 10,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="mt-2 font-medium text-gray-800">{date}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default TimelineItem
