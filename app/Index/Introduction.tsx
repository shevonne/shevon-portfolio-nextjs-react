// components/Introduction.tsx
'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Link from '@/components/Link'
import AnimatedCartoon from './animate'
import SocialLinks from '@/components/SocialLinks'
const Introduction = () => {
  return (
    <div className="item-top relative flex min-h-screen flex-row justify-center text-white">
      {/* left */}
      <div className="basis-3/5">
        <h1 className="py-20 text-6xl font-bold text-gray-900 dark:text-gray-100">
          Hi There! I'm Shevon<span className="animate-wave"> 👋 </span>
        </h1>

        <div className="z-10 animate-fadeIn">
          <h1 className="mb-10 text-4xl font-bold text-blue-500 dark:text-gray-100">
            <Typewriter
              words={[
                'Front-End Engineer with Full Stack Skills',
                'Hands-On Explorer And Focus on Detail',
                'Work-Life Balance Promoter',
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
            />
          </h1>
        </div>
        {/* <p className="mb-10 text-4xl font-bold text-gray-900 dark:text-gray-100">I'm Shevon</p> */}
        <p className="mb-10 text-2xl text-gray-900 dark:text-gray-100">
          A passionate Web Developer 🌟 with experience in building web applications using
          JavaScript, React, and Vue.js. Skilled in big data visualization and smart IoT solutions.
          Proficient in PC, responsive design, mobile H5, and WeChat Mini Programs. Passionate about
          hands-on creation and maintaining a work-life balance.
        </p>
        <SocialLinks />
        <div className="z-10 mt-8">
          <Link
            href="/about"
            className="mr-10 rounded bg-blue-500 px-4 py-2 text-2xl font-bold transition hover:bg-blue-700"
          >
            ABOUT ME
          </Link>
          <Link
            href="/about"
            className="rounded bg-blue-500 px-4 py-2 text-2xl font-bold transition hover:bg-blue-700"
          >
            DOWNLOAD MY RESUME
          </Link>
        </div>
      </div>
      <div className="basis-2/5 translate-x-0 opacity-100">
        <AnimatedCartoon animationPath="/static/animate/myhomegirl.json" />
      </div>
    </div>
  )
}

export default Introduction
