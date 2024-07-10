// components/Introduction.tsx
'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Link from '@/components/Link'
import AnimatedCartoon from './animate'
import SocialLinks from '@/components/SocialLinks'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
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
                'Hands-On Explorer with Attention to Detail',
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
        <div className="z-10 mt-8 flex">
          <button className="text-1xl mr-10 flex rounded bg-blue-500 px-4 py-2 font-bold transition hover:bg-blue-700">
            <Link href="/about">ABOUT ME</Link>
          </button>
          <button className="text-1xl flex rounded bg-blue-500 px-4 py-2 font-bold transition hover:bg-blue-700">
            <ArrowDownIcon className="mr-2 h-5 w-5" />
            <a href="/static/files/webDeveloper_shevon.pdf" download="Shevon_webDeveloper.pdf">
              DOWNLOAD MY RESUME
            </a>
          </button>
        </div>
      </div>
      <div className="basis-2/5 translate-x-0  opacity-100">
        <AnimatedCartoon animationPath="/static/animate/myhomegirl.json" />
      </div>
    </div>
  )
}

export default Introduction
