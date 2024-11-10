import Link from 'next/link'
import React from 'react'
import { Equal } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between px-14 py-5 md:py-4 md:px-5 fixed w-full left-0 top-0'>
            <Link href={'/'}>
                Claudia Novak
            </Link>

            <div className='flex gap-10 md:hidden'>
                <span>Portfolio</span>
                <span>Contact</span>
            </div>

            <button className='hidden md:flex'>
                <Equal size={30} />
            </button>
        </nav>
    )
}

export default Navbar