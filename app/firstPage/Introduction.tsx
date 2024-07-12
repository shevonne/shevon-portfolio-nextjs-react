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
    <div className="item-top relative flex min-h-screen flex-col justify-center text-white md:flex-row">
      {/* left */}
      <div className="basis-full px-4 md:basis-3/5 md:px-0">
        <h1 className="py-10 text-4xl font-bold text-gray-900 md:py-20 md:text-6xl">
          Hi There! I'm Shevon<span className="animate-wave"> 👋 </span>
        </h1>

        <div className="z-10 animate-fadeIn">
          <h1 className="mb-6 text-2xl font-bold text-blue-500 md:mb-10 md:text-4xl">
            <Typewriter
              words={[
                'Front-End Engineer with Full Stack Skills',
                'Hands-On Explorer with Attention to Detail',
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
            />
          </h1>
        </div>

        <p className="mb-6 text-lg text-gray-900 md:mb-10 md:text-2xl">
          A Web Developer 🌟 with experience in building web applications using JavaScript, React,
          and Vue.js. Skilled in big data visualization and smart IoT solutions. Proficient in PC,
          responsive design, mobile Html5, and WeChat Mini Programs. Passion for hands-on
          exploration, paying attention to detail, and creating aesthetically pleasing designs.
        </p>
        <div className="flex justify-center md:justify-start">
          <SocialLinks />
        </div>

        <div className="z-10 mt-6 flex flex-col md:mt-8 md:flex-row">
          <Link
            href="/about"
            className="mb-4 mr-0 flex items-center justify-center rounded bg-blue-500 px-4 py-2 text-lg font-bold transition hover:bg-blue-700 md:mb-0 md:mr-10 md:text-xl"
          >
            ABOUT ME
          </Link>
          <a
            href="/static/files/webDeveloper_shevon.pdf"
            download="Shevon_webDeveloper.pdf"
            className="flex items-center justify-center rounded bg-blue-500 px-4 py-2 text-lg font-bold transition hover:bg-blue-700 md:text-xl"
          >
            <ArrowDownIcon className="mr-2 h-5 w-5" />
            DOWNLOAD MY RESUME
          </a>
        </div>
      </div>
      <div className="mt-6 flex basis-full justify-center md:mt-0 md:basis-2/5">
        <AnimatedCartoon animationPath="/static/animate/myhomegirl.json" />
      </div>
    </div>
  )
}

export default Introduction
