import React from 'react'
import Link from '@/components/Link'
import 'css/tailwind.css'
import TimeLine from './timelinePage'
import Introduction from './Introduction'
import AboutMe from './aboutMe'
import Page from 'app/about/page'
import SkillsPage from './skills/page'
const HomePage = () => {
  return (
    <div>
      <Introduction />
      {/* <Page /> */}
      <SkillsPage />
      <TimeLine />
    </div>
  )
}

export default HomePage
