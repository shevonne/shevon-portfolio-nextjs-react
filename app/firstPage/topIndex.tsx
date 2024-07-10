import React from 'react'
import Link from '@/components/Link'
import 'css/tailwind.css'
import TimeLine from './timelinePage'
import Introduction from './Introduction'
// import AboutMe from './aboutMe'
// import MePage from 'app/about/page' //关于我
import MePage from '../about/page'
import SkillsPage from './skills/page'
import Projects from '../projects/page'
import ScrollToTopButton from '@/components/ScrollToTopButton'

const TopIndexPage = () => {
  return (
    <div>
      <Introduction />
      <MePage />
      <SkillsPage />
      <TimeLine />
      <Projects />
      <ScrollToTopButton />
    </div>
  )
}

export default TopIndexPage
