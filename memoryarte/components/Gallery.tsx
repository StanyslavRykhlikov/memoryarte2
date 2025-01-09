'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {useSwipeable} from 'react-swipeable'
import {Button} from '@/components/ui/button'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {GALLERY, getTotalPages} from '@/constants/gallery'
import {motion, AnimatePresence} from 'framer-motion'

interface GalleryProps {
    imagesPerPage?: number
    isMobile?: boolean
}

const BASE_PATH = '/images/gallery/';

const getImagePath = (name: string, size: '256' | '512'): string =>
    `${BASE_PATH}${name}_${size}.webp`;

const Gallery: React.FC<GalleryProps> = ({imagesPerPage = 10, isMobile = false}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [images, setImages] = useState<Array<{ src: string; id: number }>>([])
    const [direction, setDirection] = useState(0)
    const totalPages = getTotalPages(imagesPerPage)

    useEffect(() => {
        const start = (currentPage - 1) * imagesPerPage;
        const end = start + imagesPerPage;
        setImages(
            GALLERY.slice(start, end).map(item => ({
                src: getImagePath(item.m[0], isMobile ? '256' : '512'),
                id: item.i
            }))
        );
    }, [currentPage, imagesPerPage, isMobile])

    const handlePrevPage = () => {
        setDirection(-1)
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
    }

    const handleNextPage = () => {
        setDirection(1)
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
    }

    const handlers = useSwipeable({
        onSwipedLeft: handleNextPage,
        onSwipedRight: handlePrevPage,
        trackMouse: true,
        preventScrollOnSwipe: true
    })

    const PaginationButtons = () => (
        <div className="flex justify-between items-center my-4">
            <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                variant="outline"
                size="icon"
            >
                <ChevronLeft className="h-4 w-4"/>
            </Button>
            <span>
                Страница {currentPage} из {totalPages}
            </span>
            <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                variant="outline"
                size="icon"
            >
                <ChevronRight className="h-4 w-4"/>
            </Button>
        </div>
    )

    const pageVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PaginationButtons/>
            <div className="my-8 overflow-hidden" {...handlers}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentPage}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={pageTransition}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {images.map(({src, id}) => (
                            <div key={id} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                                <Image
                                    src={src}
                                    alt={`Gallery image ${id}`}
                                    width={isMobile ? 256 : 512}
                                    height={isMobile ? 256 : 512}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <PaginationButtons/>
        </div>
    )
}

export default Gallery

