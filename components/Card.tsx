import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="mx-auto max-w-[470px] p-6 md:w-1/3 md:max-w-none md:p-10">
    <div className={`${imgSrc && 'h-full'} overflow-hidden rounded-lg bg-white shadow-md`}>
      {imgSrc && (
        <div className="relative">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="transform-gy:rotate-y-4 rounded-t-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="transform-gy:rotate-y-4 rounded-t-lg object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
              width={544}
              height={306}
            />
          )}
        </div>
      )}
      <div className="p-4 md:p-10">
        <h2 className="mb-3 text-xl font-bold leading-8 text-gray-900 hover:text-blue-500 ">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="text-sm text-gray-700 md:text-base">{description}</p>
        {href && (
          <Link
            href={href}
            className="mt-2 inline-block text-sm font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-600"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
