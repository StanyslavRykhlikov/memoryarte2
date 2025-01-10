'use client'

import React, {useState, useEffect} from 'react'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import GravestonePricing from '@/components/GravestonePricing'
import FeatureItem from '@/components/FeatureItem';
import {WHY_CHOOSE_US, HOW_WE_WORK} from '@/constants/mainImages';
import Footer from '@/components/Footer'

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
            <Header/>
            <div className="container mx-auto px-4 py-8" style={{marginTop: isMobile ? '32px' : '64px'}}>
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                    Изготовление мемориальных плит
                </h1>
                <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
                    Лапиды из порселанато, долговечные, эстетичные и доступные по цене.
                    Высокая детализация гравировки и персонализированный подход для увековечения памяти.
                </p>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Наша галерея</h2>
                    <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                        Ознакомьтесь с нашими работами. Каждая плита – это уникальное произведение, созданное по
                        пожеланиям клиента.
                    </p>
                    <Gallery imagesPerPage={12} isMobile={isMobile}/>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Почему выбирают
                        нас?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {WHY_CHOOSE_US.map((item, index) => (
                            <FeatureItem key={index} {...item} />
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Как мы
                        работаем?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {HOW_WE_WORK.map((item, index) => (
                            <FeatureItem key={index} {...item} />
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Расчет
                        стоимости</h2>
                    <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                        Узнайте цену мемориальной плиты, задав размеры. Консультация бесплатна.
                    </p>
                    <GravestonePricing/>
                </div>
                <Footer/>
            </div>
        </div>

    )
}

