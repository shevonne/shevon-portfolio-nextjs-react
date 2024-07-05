import React from 'react'
import 'css/tailwind.css'

const AboutMe = () => {
  return (
    <div>
      <div
        id="about"
        className="flex min-h-screen flex-col items-center justify-center p-8 text-gray-800"
      >
        <h2 className="mb-4 text-4xl font-bold">关于我</h2>
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
    </div>
  )
}

export default AboutMe
