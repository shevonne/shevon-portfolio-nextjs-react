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
      'HTML',
      'CSS',
      'SCSS',
      'Webpack',
      'ElementUI',
      'Bootstrap',
      'Echarts',
      'WeChat Mini-Programs',
    ],
    bgColor: '#3B82F6', // Tailwind blue-500
    borderColor: 'border-blue-500',
    textColor: 'text-blue-500',
  },
  {
    type: 'Mobile Development',
    skills: ['Uniapp'],
    bgColor: '#10B981', // Tailwind green-500
    borderColor: 'border-green-500',
    textColor: 'text-green-500',
  },
  {
    type: 'Backend Development & Tools',
    skills: ['Node.js', 'Koa2', 'MySQL', 'Git', 'Network Knowledge (HTTP, TCP, etc.)'],
    bgColor: '#F59E0B', // Tailwind yellow-500
    borderColor: 'border-yellow-500',
    textColor: 'text-yellow-500',
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
    bgColor: '#EF4444', // Tailwind red-500
    borderColor: 'border-red-500',
    textColor: 'text-red-500',
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
