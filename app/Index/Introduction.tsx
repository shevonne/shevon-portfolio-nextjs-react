// components/Introduction.tsx
'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Link from '@/components/Link'
import AnimatedCartoon from './animate'

const Introduction = () => {
  return (
    <div className="item-top relative flex min-h-screen flex-row justify-center text-white">
      {/* left */}
      <div className="basis-3/5">
        <h1 className="py-20 text-7xl font-bold text-gray-900 dark:text-gray-100">
          Hi There! <span className="animate-wave"> 👋 </span>
        </h1>

        <div className="z-10 animate-fadeIn">
          <h1 className="mb-10 text-5xl font-bold text-gray-900 dark:text-gray-100">
            <Typewriter
              words={["I'm Shevon X.Zhang", 'Front-End Developer']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
            />
          </h1>
        </div>
        <p className="mb-10 text-4xl text-gray-900 dark:text-gray-100">Front-End Developer</p>
        <p className="text-1xl mb-10 text-gray-900 dark:text-gray-100">
          I have over nine years of experience as a front-end developer. I specialize in creating
          user-friendly interfaces using technologies like Vue.js, JavaScript, and Echarts. I’ve led
          teams to build smart city systems and data visualization platforms. I love solving
          problems and making websites and applications that are both beautiful and functional.
        </p>
        <div className="z-10 mt-8">
          <Link
            href="#about"
            className="rounded bg-blue-500 px-4 py-2 transition hover:bg-blue-700"
          >
            Learn More About Me
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
