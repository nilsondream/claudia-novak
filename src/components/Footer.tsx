import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center py-32'>
            <div className='w-[400px] md:w-full md:px-5 flex flex-col items-start'>
                <span>Build & design by <a href="https://nilsonroa.vercel.app" target='_blank' className='hover:opacity-50'>@nilsondream</a></span>
                <span>All rights reserved.</span>
                <span>2024</span>
            </div>
        </footer>
    )
}

export default Footer