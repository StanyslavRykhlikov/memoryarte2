'use client'

import React, { useState, useEffect } from 'react'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)

    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8" style={{ marginTop: isMobile ? '64px' : '128px' }}>
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Наша галерея</h1>
        <Gallery imagesPerPage={12} isMobile={isMobile} />
      </div>
    </div>
  )
}

