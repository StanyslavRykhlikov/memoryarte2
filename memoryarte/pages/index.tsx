'use client'

import React, {useState, useEffect} from 'react'
import Gallery from '@/components/Gallery'

export default function Home() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768) // Предполагаем, что устройства с шириной <= 768px - мобильные
        }

        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)

        return () => {
            window.removeEventListener('resize', checkIfMobile)
        }
    }, [])

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Наша галерея</h1>
            <Gallery imagesPerPage={12} isMobile={isMobile}/>
        </div>
    )
}

