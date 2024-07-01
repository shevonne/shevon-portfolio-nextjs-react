// hooks/useIntersectionObserver.ts
import { useEffect, useRef } from 'react'

const useIntersectionObserver = (callback: () => void) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [callback])

  return ref
}

export default useIntersectionObserver
