'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {useSwipeable} from 'react-swipeable'
import {Button} from '@/components/ui/button'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {getPageImages, getTotalPages} from '@/constants/gallery'

interface GalleryProps {
    imagesPerPage?: number
    isMobile?: boolean
}

const Gallery: React.FC<GalleryProps> = ({imagesPerPage = 10, isMobile = false}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [images, setImages] = useState<string[]>([])
    const totalPages = getTotalPages(imagesPerPage)

    useEffect(() => {
        setImages(getPageImages(currentPage, imagesPerPage, isMobile ? '256' : '512'))
    }, [currentPage, imagesPerPage, isMobile])

    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
    }

    const handleNextPage = () => {
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

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PaginationButtons/>
            <div className="my-8" {...handlers}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                            <Image
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                width={isMobile ? 256 : 512}
                                height={isMobile ? 256 : 512}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <PaginationButtons/>
        </div>
    )
}

export default Gallery

