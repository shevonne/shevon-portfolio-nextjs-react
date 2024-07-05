// components/AnimatedCartoon.tsx
import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'

const AnimatedCartoon = ({ animationPath }) => {
  return (
    <div className="h-full w-full">
      <Player autoplay loop src={animationPath} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

export default AnimatedCartoon
