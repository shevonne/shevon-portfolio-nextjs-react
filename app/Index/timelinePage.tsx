// app/timelinePage.tsx
'use client'

import React from 'react'
import TimelineItem from '../../components/timeLine'

const timelineData = [
  //   {
  //     date: '2019-2024',
  //     title: 'Beijing Boxin Chuangyi Technology Co., Ltd',
  //     description: `Led the development of WeChat public accounts, mini-programs, data visualization platforms, tag management systems, and time management systems.
  // Designed and developed a data visualization intelligent management platform.
  // Refactored and optimized MVC code to improve efficiency and reduce redundancy across multiple projects.
  // Developed a component library for dynamic data visualization, improving user experience and data presentation.
  // Enhanced real-time chart rendering for smoother performance using optimized timer-based mechanisms.`,
  //   },
  //   {
  //     date: '2017-2019',
  //     title: 'Beijing Xinzhi Lian Technology Co., Ltd',
  //     description: `Company's Best Productivity Award Led the front-end development for smart city integration systems, including intelligent integration platforms and cultural relics protection systems.
  // Developed 3D client interaction features using Unity3D and integrated with front-end technologies for seamless user experiences.
  // Managed the front-end team, ensuring timely delivery of high-quality code and efficient project management.`,
  //   },
  {
    date: '2016-2017',
    title: 'Tuidi Digital World (Beijing) Technology Culture Co., Ltd',
    description:
      'Developed and maintained interfaces and interactive features for VR-related websites Handled daily maintenance and updates for VR information websites, ensuring optimal performance and user engagement.',
  },
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
