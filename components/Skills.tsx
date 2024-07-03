'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Skill {
  type: string
  skills: string[]
  bgColor: string
  borderColor: string
  textColor: string
}

const SkillComponent: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-bold text-gray-800">{skill.type}</h2>
      <div className="flex flex-wrap">
        {skill.skills.map((skillItem, index) => (
          <motion.div
            key={index}
            className={`m-2 rounded-full border px-4 py-2 font-bold ${skill.borderColor} ${skill.textColor}`}
            style={{ backgroundColor: `${skill.bgColor}1A` }} // 1A is hex for 10% opacity
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {skillItem}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const SkillsShowcase: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">My Skills</h1>
      {skills.map((skill, index) => (
        <SkillComponent key={index} skill={skill} />
      ))}
    </div>
  )
}

export default SkillsShowcase
