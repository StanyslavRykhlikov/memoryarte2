'use client'

import React, {useState, useEffect} from 'react'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import GravestonePricing from '@/components/GravestonePricing'

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
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                🌟
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Высокое качество</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Используем долговечный порселанато, устойчивый к климату Эквадора.
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                🖼️
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Индивидуальный
                                дизайн</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Полная персонализация: от фотографии до текстов и символов.
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                🕒
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Скорость
                                изготовления</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Полный цикл – от дизайна до готовой плиты – занимает всего неделю.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Как мы
                        работаем?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                📷
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">1. Выбор фото</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Отправьте нам фотографию и пожелания по дизайну.
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                ✏️
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">2. Утверждение
                                дизайна</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Мы разработаем макет и согласуем его с Вами.
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                🛠️
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3. Изготовление</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Начинаем производство после утверждения и предоплаты.
                            </p>
                        </div>
                        <div className="text-center">
                            <div
                                className="w-12 h-12 mx-auto mb-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center">
                                🚚
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">4. Доставка</h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                Отправляем готовую плиту по всей территории Эквадора.
                            </p>
                        </div>
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
            </div>
        </div>

    )
}

