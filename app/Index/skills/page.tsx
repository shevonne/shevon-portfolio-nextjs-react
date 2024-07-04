'use client'

import React from 'react'
import SkillsShowcase from '@/components/Skills'

const skills = [
  {
    type: 'Front-End Development',
    skills: [
      'React',
      'Vue.js',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'SCSS',
      'Webpack',
      'ElementUI',
      'Bootstrap',
      'Echarts',
      'WeChat Mini-Programs',

      'Tailwind CSS',
      'SVG LottieFiles',
      'Uniapp',
      'Network Knowledge (HTTP, TCP, etc.)',
    ],
    bgColor: '#3B82F6', // Tailwind blue-500
    borderColor: 'border-blue-500',
    textColor: 'text-blue-500',
  },
  // {
  //   type: 'Mobile Development',
  //   skills: ['Uniapp'],
  //   bgColor: '#10B981',
  //   borderColor: 'border-teal-700',
  //   textColor: 'text-teal-700',
  // },
  {
    type: 'Backend Development & Tools',
    skills: ['Node.js', 'Next.js', 'Koa2', 'MySQL', 'Git', 'VS Code', 'ESLint'],
    bgColor: '#10B981',
    borderColor: 'border-teal-700',
    textColor: 'text-teal-700',
    // bgColor: '#fbbf24',
    // borderColor: 'border-amber-700',
    // textColor: 'text-amber-700',
  },
  {
    type: 'Additional Skills',
    skills: [
      'Java',
      'C',
      'Photoshop',
      'Figma',
      'Smart Building Development',
      'Project Management',
      'Technical Documentation Writing',
    ],
    bgColor: '#EF4444',
    borderColor: 'border-pink-700',
    textColor: 'text-pink-700',
  },
]

const SkillsPage: React.FC = () => {
  return (
    <div>
      <SkillsShowcase skills={skills} />
    </div>
  )
}

export default SkillsPage
