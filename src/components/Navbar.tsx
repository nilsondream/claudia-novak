import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-14 py-5 fixed w-full left-0 top-0'>
            <Link href={'/'}>
                Claudia Novak
            </Link>

            <div className='flex gap-10'>
                <span>Portfolio</span>
                <span>Contact</span>
            </div>
        </nav>
    )
}

export default Navbar