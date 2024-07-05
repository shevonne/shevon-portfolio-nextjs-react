'use client'

import React from 'react'
import TimelineItem from '../../components/timeLine'

const timelineData = [
  {
    date: '2019-2024',
    company: 'Beijing Boxin Chuangyi Technology Co., Ltd',
    position: 'Senior Front-End Developer',
    address: 'Beijing, China',
    description: [
      'Led the development of WeChat public accounts, mini-programs, data visualization platforms, tag management systems, and time management systems.',
      'Designed and developed a data visualization intelligent management platform.',
      'Refactored and optimized MVC code to improve efficiency and reduce redundancy across multiple projects.',
      'Developed a component library for dynamic data visualization, improving user experience and data presentation.',
      'Enhanced real-time chart rendering for smoother performance using optimized timer-based mechanisms.',
    ],
  },
  {
    date: '2017-2019',
    company: 'Beijing Xinzhi Lian Technology Co., Ltd',
    position: 'Front-End Team Lead',
    address: 'Beijing, China',
    description: [
      "Company's Best Productivity Award.",
      'Led the front-end development for smart city integration systems, including intelligent integration platforms and cultural relics protection systems.',
      'Developed 3D client interaction features using Unity3D and integrated with front-end technologies for seamless user experiences.',
      'Managed the front-end team, ensuring timely delivery of high-quality code and efficient project management.',
    ],
  },
  {
    date: '2016-2017',
    company: 'Tuidi Digital World (Beijing) Technology Culture Co., Ltd',
    position: 'Front-End Developer',
    address: 'Beijing, China',
    description: [
      'Developed and maintained interfaces and interactive features for VR-related websites.',
      'Handled daily maintenance and updates for VR information websites, ensuring optimal performance and user engagement.',
    ],
  },
]

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">PROFESSIONAL EXPERIENCE</h1>
      <div className="relative">
        {/* 中央时间线 */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* 时间线 */}
          <div className="h-full w-0.5 bg-gray-800"></div>
          {/* 时间线起点 */}
          <div className="absolute top-0 -mt-1.5 h-3 w-3 rounded-full bg-gray-800"></div>
          {/* 时间线终点 */}
          <div className="absolute bottom-0 -mb-1.5 h-3 w-3 rounded-full bg-gray-800"></div>
        </div>
        <div className="relative z-10">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline
