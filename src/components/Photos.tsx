'use client'
import React, { useState } from 'react';
import { photos } from "@/data";

interface Photo {
    id: string;
    image: string;
    name: string;
    aperture: string;
    year: string;
}

const Photos: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImage = (image: string) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className='pt-[70vh] md:pt-[60vh] md:px-5 flex flex-col items-center gap-40'>
            {photos.map((e: Photo) => (
                <div
                    key={e.id}
                    className='cursor-pointer w-[400px] md:w-full aspect-[4/5] group relative overflow-hidden'
                    onClick={() => handleImage(e.image)}
                >
                    <img
                        src={e.image}
                        alt={e.name}
                        className='absolute w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-125 duration-300'
                    />
                    <div className='flex justify-between absolute bottom-0 w-full p-5'>
                        <span>
                            {e.id}<br />
                            F/{e.aperture}
                        </span>
                        <span className='text-right'>
                            {e.name}<br />
                            {e.year}
                        </span>
                    </div>
                </div>
            ))}

            {selectedImage && (
                <div className="fixed z-[999] w-full h-full top-0 left-0 flex items-center justify-center">
                    <div className='absolute bg-black/75 w-full h-full' onClick={closeModal} />
                    <img src={selectedImage} alt="Selected" className='relative z-10 aspect-[4/5] object-cover h-[90%] md:h-auto' />
                </div>
            )}
        </div>
    );
}

export default Photos;