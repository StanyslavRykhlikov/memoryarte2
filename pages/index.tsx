'use client'

import React, {useState, useEffect} from 'react'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import GravestonePricing from '@/components/GravestonePricing'
import FeatureItem from '@/components/FeatureItem';
import {WHY_CHOOSE_US, HOW_WE_WORK} from '@/constants/mainImages';
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import Head from 'next/head'

export default function Home() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerHeight > window.innerWidth)
        }

        checkIfMobile()
        window.addEventListener('resize', checkIfMobile)

        return () => {
            window.removeEventListener('resize', checkIfMobile)
        }
    }, [])

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Head>
                <title>Lápidas de porcelanato con grabado láser en Ecuador | MemoryArte</title>
            </Head>
            <Header/>
            <div className="container mx-auto px-4 py-8" style={{marginTop: isMobile ? '32px' : '64px'}}>
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                    Fabricación de lápidas
                </h1>
                <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
                    Lápidas de porcelanato: duraderas, estéticas y accesibles.
                    Alta precisión en el grabado y un enfoque personalizado para honrar la memoria de sus seres
                    queridos.
                </p>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                        Nuestra galería
                    </h2>
                    <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                        Descubra nuestras obras.
                        Cada lápida es una pieza única, creada según las preferencias del cliente.
                    </p>
                    <Gallery imagesPerPage={12} isMobile={isMobile}/>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                        ¿Por qué elegirnos?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {WHY_CHOOSE_US.map((item, index) => (
                            <FeatureItem key={index} {...item} />
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                        ¿Cómo trabajamos?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {HOW_WE_WORK.map((item, index) => (
                            <FeatureItem key={index} {...item} />
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                        Cálculo del costo
                    </h2>
                    <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                        Consulte el precio de la lápida proporcionando las dimensiones. La asesoría es gratuita.
                    </p>
                    <GravestonePricing/>
                </div>
                <div className="mb-12">
                    <FAQ/>
                </div>
                <Footer/>
            </div>
        </div>

    )
}

