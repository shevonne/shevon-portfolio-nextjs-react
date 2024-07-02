// components/Introduction.tsx
'use client'

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Link from '@/components/Link'

const Introduction = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center text-white">
      <h1 className="mb-4 text-5xl font-bold">
        Hi There! <span className="animate-wave"> 👋 </span>
      </h1>
      <div className="z-10 animate-fadeIn">
        <h1 className="mb-4 text-5xl font-bold">
          <Typewriter
            words={["Hello, I'm Shevon Zhang"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
          />
        </h1>
      </div>
      <p className="text-2xl">Front-End Developer</p>
      <div className="z-10 mt-8">
        <Link href="#about" className="rounded bg-blue-500 px-4 py-2 transition hover:bg-blue-700">
          Learn More About Me
        </Link>
      </div>
    </div>
  )
}

export default Introduction
