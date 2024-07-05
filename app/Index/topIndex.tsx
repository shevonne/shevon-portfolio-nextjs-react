import React from 'react'
import Link from '@/components/Link'
import 'css/tailwind.css'
import TimeLine from './timelinePage'
import Introduction from './Introduction'
import AboutMe from './aboutMe'
import MePage from 'app/about/page' //关于我
import SkillsPage from './skills/page'
import Projects from 'app/projects/page'

const TopIndexPage = () => {
  return (
    <div>
      <Introduction />
      <MePage />
      <SkillsPage />
      <TimeLine />
      <Projects />
    </div>
  )
}

export default TopIndexPage
