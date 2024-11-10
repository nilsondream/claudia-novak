'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Equal, X } from 'lucide-react'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleMenu = () => setOpen(!open);

    return (
        <>
            <header className='flex items-center justify-between px-14 py-5 md:py-4 md:px-5 fixed z-[999] w-full left-0 top-0'>
                <Link href={'/'} className={`${open ? 'text-black' : 'text-[#FFD6FB]'}`}>
                    Claudia Novak
                </Link>

                <div className='flex gap-10 md:hidden'>
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Contact</span>
                </div>

                <button className={`hidden md:flex ${open ? 'text-black' : 'text-[#FFD6FB]'}`} onClick={handleMenu}>
                    {open ? <X size={30} /> : <Equal size={30} />}
                </button>
            </header>

            <div className={`hidden md:flex fixed flex-col items-start z-[88] p-5 top-0 w-full h-screen bg-[#FFD6FB] text-black duration-300 ${open ? 'right-0' : '-right-[100%]'}`}>
                <div className='flex flex-col gap-5 mt-20'>
                    <span className='text-5xl'>About</span>
                    <span className='text-5xl'>Portfolio</span>
                    <span className='text-5xl'>Contact</span>
                    <div className='text-muted-foreground flex flex-col items-start gap-2 mt-10'>
                        <a href='#'>Instagram</a>
                        <a href='#'>YouTube</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar