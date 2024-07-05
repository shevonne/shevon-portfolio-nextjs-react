'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import useIntersectionObserver from '../data/hooks/useIntersectionObserver'
import {
  BriefcaseIcon,
  MapPinIcon,
  UserIcon,
  BuildingOffice2Icon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/solid'
interface TimelineItemProps {
  index: number
  date: string
  company: string
  position: string
  address: string
  description: string[]
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  index,
  date,
  company,
  position,
  address,
  description,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useIntersectionObserver(() => setIsVisible(true))

  const isLeft = index % 2 === 0
  return (
    <div ref={ref} className="relative mb-8 flex items-center justify-between">
      {isLeft ? (
        <>
          {/* 左侧显示年份 */}
          <div className="flex w-1/2 flex-row items-center justify-end pr-4">
            <span className="mb-2 animate-bounce font-medium text-gray-800">{date}</span>
            {/* 圆点 */}
            <motion.div
              className="absolute h-6 w-6 rounded-full border-2 border-gray-800"
              style={{
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
            <div className="group relative rounded-lg border border-gray-800 bg-transparent p-6 leading-relaxed shadow-lg duration-300 ease-in-out">
              <h3 className="mb-5 flex items-center justify-items-center text-2xl font-semibold text-blue-500 duration-300 ease-in-out group-hover:text-3xl">
                {/* <UserIcon className="h-5 w-5 text-blue-500" /> */}
                {position}
              </h3>
              <p className="mb-2 flex items-center justify-items-center text-gray-900 group-hover:text-xl">
                <BuildingOffice2Icon className="mr-2 h-5 w-5 text-gray-900" />
                {company}
              </p>
              <p className="mb-2 flex items-center justify-items-center text-gray-900">
                <MapPinIcon className="mr-2 h-5 w-5 text-gray-900" />
                {address}
              </p>
              <p className="mb-2 flex items-center justify-items-center text-gray-900">
                <PresentationChartLineIcon className="mr-2 h-5 w-5 text-gray-900" />
                What I Do
              </p>
              <ul className="description list-disc pl-5 text-gray-900">
                {description.map((line, idx) => (
                  <li key={idx} className="">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* 左侧显示详细信息 */}
          <div className="w-1/2 pr-8 text-left">
            <div className="group relative rounded-lg border border-gray-800 bg-transparent p-6 leading-relaxed shadow-lg duration-300 ease-in-out">
              <h3 className="mb-5 flex text-2xl font-semibold  text-blue-500 duration-300 ease-in-out group-hover:text-3xl">
                {/* <UserIcon className="h-5 w-5 text-blue-500" /> */}
                {position}
              </h3>
              <p className="mb-2 flex text-gray-900 group-hover:text-xl">
                <BuildingOffice2Icon className="mr-2 h-5 w-5 text-gray-900" />
                {company}
              </p>
              <p className="mb-2 flex text-gray-900">
                <MapPinIcon className="mr-2 h-5 w-5 text-gray-900" />
                {address}
              </p>
              <p className="mb-2 flex text-gray-900">
                <PresentationChartLineIcon className="mr-2 h-5 w-5 text-gray-900" />
                What I Do
              </p>
              <ul className="description list-disc pl-5 text-gray-900">
                {description.map((line, idx) => (
                  <li key={idx} className="">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* 右侧显示年份 */}
          <div className="flex w-1/2 flex-row items-center pl-4">
            <motion.div
              className="absolute h-6 w-6 rounded-full border-2 border-gray-800"
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: isVisible ? 'black' : 'white',
                zIndex: 10,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <span className="mt-2 animate-bounce font-medium text-gray-800">{date}</span>
          </div>
        </>
      )}
    </div>
  )
}

export default TimelineItem
