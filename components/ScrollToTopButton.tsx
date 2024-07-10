'use client'
import React, { useEffect, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 定义 toggleVisibility 函数来控制按钮的显示与隐藏
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // 添加滚动事件监听器
    window.addEventListener('scroll', toggleVisibility)

    // 在组件卸载时清除监听器
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // 点击按钮回到页面顶部的函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // 根据 isVisible 的状态来决定是否显示按钮
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-10 right-10 rounded-md bg-blue-500 px-4 py-2 text-white shadow-md ${
        isVisible ? 'visible' : 'invisible'
      }`}
    >
      <ChevronUpIcon className="h-5 w-5" />
    </button>
  )
}

export default ScrollToTopButton
