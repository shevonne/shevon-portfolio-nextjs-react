import React from 'react'
import Link from '@/components/Link'
import 'css/tailwind.css'
import TimeLine from './timelinePage'
import Introduction from '@/components/Introduction'
const HomePage = () => {
  return (
    <div>
      {/* <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white">
        <div className="animate-fadeIn">
          <h1 className="mb-4 text-5xl font-bold">
            Hello, I'm Shevon Zhang <span className="animate-wave">👋</span>
          </h1>
          <p className="text-2xl">Front-End Developer</p>
        </div>
        <div className="mt-8">
          <Link
            href="#about"
            className="rounded bg-blue-500 px-4 py-2 transition hover:bg-blue-700"
          >
            Learn More About Me
          </Link>
        </div>
      </div> */}
      <Introduction />
      <div
        id="about"
        className="flex min-h-screen flex-col items-center justify-center bg-white p-8 text-gray-800"
      >
        <h2 className="mb-4 text-4xl font-bold">About Me</h2>
        <p className="mb-4 text-xl">
          I am a passionate front-end developer with 9 years of experience...
        </p>
        <a
          href="/path/to/your/resume.pdf"
          download
          className="rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          Download My Resume
        </a>
      </div>
      <TimeLine />
    </div>
  )
}

export default HomePage
