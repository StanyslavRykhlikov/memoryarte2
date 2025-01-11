'use client'

import React, {useEffect, useState} from 'react'

const VideoHeader: React.FC = () => {
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

    const videoSrc = isMobile ? '/video/memoriarte_video_small.mp4' : '/video/memoriarte_video_large.mp4'
    const videoHeight = isMobile ? 208 : 506

    return (
        <div className="w-full" style={{height: videoHeight}}>
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoSrc} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default VideoHeader

