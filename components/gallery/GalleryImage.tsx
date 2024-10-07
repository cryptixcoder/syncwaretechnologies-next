"use client"

import { useState } from 'react'

type GalleryImageProps = {
    src: string
    alt?:string
}

export default function GalleryImage({ src, alt}:GalleryImageProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
            <img src={src} alt={alt} onClick={handleOpen} className="w-full rounded-lg cursor-pointer transform hover:scale-105 transition duration-200 ease-in-out" />

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={handleClose}>
                    <div className="relative">
                        <img src={src} alt={alt} className="max-w-screen max-h-screen object-contain rounded-lg" />
                    </div>
                </div>
            )}
        </>
    )
}