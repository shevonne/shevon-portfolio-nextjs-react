import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { MapPinIcon } from '@heroicons/react/24/solid'
interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="mb-20 min-h-screen divide-y divide-dashed divide-gray-500/25">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-start md:text-4xl md:leading-14">
            Let Me Introduce Myself
          </h1>
        </div>
        <div className="space-y-2 pt-10 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 ">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="duration-10 h-48 w-48 rounded-full drop-shadow-xl"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="m-2 rounded-full border border-gray-500 bg-transparent px-4 py-2 text-base font-bold text-gray-800 shadow">
              {occupation}
            </div>
            {/* <div className="flex text-gray-500">
              <MapPinIcon className="mr-1 h-5 w-5 text-gray-500" />
              {company}
            </div> */}
            <div className="mt-5 flex items-center justify-center">
              <span className="relative mr-2 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-400"></span>
              </span>
              <button className="text-xl font-bold text-sky-500">Open for opportunities</button>
            </div>
            {/* <div className="text-2xl text-gray-900">FIND ME ON</div> */}
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              {/* <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} /> */}
            </div>
            {/* <div>Feel free to connect with me</div> */}
          </div>
          <div className="prose max-w-none pb-8 pt-8 font-sans text-lg  xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
