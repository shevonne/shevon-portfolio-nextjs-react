import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { CodeBracketIcon } from '@heroicons/react/24/solid'
import SocialIcon from '@/components/social-icons'
const Header = () => {
  return (
    <header className="flex items-center justify-between pt-10 md:pb-20">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between duration-300 ease-in hover:scale-110">
            <div className="mr-3">
              {/* <Logo /> */}
              <Image
                src="/static/images/logo4.png"
                alt="Logo"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="h-6 text-2xl font-bold font-semibold sm:block md:text-3xl">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden text-2xl font-medium text-gray-900 underline-offset-8 hover:text-primary-700 hover:underline dark:text-gray-100 dark:hover:text-primary-400
              sm:block"
            >
              {link.title}
            </Link>
          ))}
        {/* <SearchButton />
        <ThemeSwitch /> */}
        <MobileNav />
        <div>
          <SocialIcon kind="github" href={siteMetadata.webGithub} size={8} />
          {/* <Link href={siteMetadata.webGithub}>
            <CodeBracketIcon className="mr-2 h-8 w-8 text-pink-500" />
          </Link> */}
        </div>
      </div>
    </header>
  )
}

export default Header
