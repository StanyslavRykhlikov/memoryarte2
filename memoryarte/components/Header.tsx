'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {getLogoUrl} from '@/constants/logo'
import SocialButtons from './SocialButtons'

const Header: React.FC = () => {
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

    const headerHeight = isMobile ? 32 : 64
    const logoSize = isMobile ? 64 : 128

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50"
                style={{maxHeight: `${isMobile ? logoSize : headerHeight}px`}}>
            <div className="container mx-auto px-4 flex justify-between items-center h-full relative"
                 style={{maxHeight: `${isMobile ? logoSize : headerHeight}px`}}>
                <div className="flex items-center">
                    <div className="relative"
                         style={{
                             minWidth: `${logoSize}px`,
                             minHeight: `${logoSize}px`,
                             marginTop: `${isMobile ? 0 : logoSize / 2}px`
                         }}>
                        <Image
                            src={getLogoUrl(logoSize)}
                            alt="MemoriArte Logo"
                            width={logoSize}
                            height={logoSize}
                            priority
                        />
                    </div>
                    <h1 className={`text-lg md:text-xl font-bold ${isMobile ? 'ml-2' : 'ml-4'} text-gray-900 dark:text-white`}>MemoriArte</h1>
                </div>
                <div className="flex items-center h-full">
                    <SocialButtons/>
                </div>
            </div>
        </header>
    )
}

export default Header

