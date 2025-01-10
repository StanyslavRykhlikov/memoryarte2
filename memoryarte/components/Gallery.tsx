'use client'

import React, {useState, useEffect, useCallback} from 'react'
import Image from 'next/image'
import {useSwipeable} from 'react-swipeable'
import {Button} from '@/components/ui/button'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {GALLERY, getTotalPages, getImagesById} from '@/constants/gallery'
import {motion, AnimatePresence} from 'framer-motion'
import GalleryModal from './GalleryModal'
import {GALLERY_PATH} from '@/constants/paths'
import {BASE_PATH} from "@/constants/paths";

interface GalleryProps {
    imagesPerPage?: number
    isMobile?: boolean
    showPageInfo?: boolean
}

const getImagePath = (name: string, size: '256' | '512'): string =>
    `${GALLERY_PATH}${name}_${size}.webp`;

const Gallery: React.FC<GalleryProps> = ({imagesPerPage = 10, isMobile = false, showPageInfo = false}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [images, setImages] = useState<Array<{ src: string; id: number }>>([])
    const [direction, setDirection] = useState(0)
    const [modalImages, setModalImages] = useState<string[] | null>(null)
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

    const handlePrevPage = useCallback(() => {
        setDirection(-1)
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages))
    }, [totalPages])

    const handleNextPage = useCallback(() => {
        setDirection(1)
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1))
    }, [totalPages])

    const handlers = useSwipeable({
        onSwipedLeft: handleNextPage,
        onSwipedRight: handlePrevPage,
        trackMouse: true,
        preventScrollOnSwipe: true
    })

    const handleImageClick = (id: number) => {
        const fullSizeImages = getImagesById(id, '1024')?.map(img => img.split('/').pop()?.replace(/^\//, '') || '');
        if (fullSizeImages && fullSizeImages.length > 0) {
            setModalImages(fullSizeImages);
        }
    }

    const closeModal = () => {
        setModalImages(null);
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handlePrevPage();
            } else if (event.key === 'ArrowRight') {
                handleNextPage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handlePrevPage, handleNextPage]);

    const PaginationButtons = () => (
        <div className="flex justify-between items-center my-2">
            <Button
                onClick={handlePrevPage}
                variant="outline"
                size="icon"
                className="dark:bg-gray-700 dark:text-white"
            >
                <ChevronLeft className="h-4 w-4"/>
            </Button>
            {showPageInfo && (
                <span className="dark:text-white">
                    Страница {currentPage} из {totalPages}
                </span>
            )}
            <Button
                onClick={handleNextPage}
                variant="outline"
                size="icon"
                className="dark:bg-gray-700 dark:text-white"
            >
                <ChevronRight className="h-4 w-4"/>
            </Button>
        </div>
    )

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
        duration: 0.5
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PaginationButtons/>
            <div className="my-4 overflow-hidden relative" {...handlers}>
                <AnimatePresence initial={false} custom={direction} mode="wait">
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
                        {images.map(({src, id}, index) => (
                            <div
                                key={id}
                                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => handleImageClick(id)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery image ${id}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
            <PaginationButtons/>
            {modalImages && modalImages.length > 0 && (
                <GalleryModal
                    images={modalImages}
                    onClose={closeModal}
                    baseUrl={GALLERY_PATH.replace(`${BASE_PATH}`, '')}
                />
            )}
        </div>
    )
}

export default Gallery

