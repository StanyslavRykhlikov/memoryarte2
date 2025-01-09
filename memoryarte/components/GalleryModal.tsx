'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import {Button} from '@/components/ui/button'
import {X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut} from 'lucide-react'
import {useSwipeable} from 'react-swipeable'

interface GalleryModalProps {
    images: string[]
    onClose: () => void
}

const GalleryModal: React.FC<GalleryModalProps> = ({images, onClose}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isZoomed, setIsZoomed] = useState(false)
    const [direction, setDirection] = useState(0)

    const handlePrev = () => {
        setDirection(-1)
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1))
    }

    const handleNext = () => {
        setDirection(1)
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0))
    }

    const toggleZoom = () => {
        setIsZoomed((prev) => !prev)
    }

    const handlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,
        preventScrollOnSwipe: true
    })

    const pageVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.3
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div className="relative w-full h-full max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                <Button
                    className="absolute top-4 right-4 z-10"
                    size="icon"
                    variant="ghost"
                    onClick={onClose}
                >
                    <X className="h-6 w-6"/>
                </Button>
                <div className="h-full flex items-center justify-center" {...handlers}>
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={pageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={pageTransition}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <Image
                                src={images[currentIndex]}
                                alt={`Gallery image ${currentIndex + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className={`object-contain transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <Button size="icon" variant="outline" onClick={handlePrev}>
                        <ChevronLeft className="h-4 w-4"/>
                    </Button>
                    <Button size="icon" variant="outline" onClick={toggleZoom}>
                        {isZoomed ? <ZoomOut className="h-4 w-4"/> : <ZoomIn className="h-4 w-4"/>}
                    </Button>
                    <Button size="icon" variant="outline" onClick={handleNext}>
                        <ChevronRight className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

export default GalleryModal

