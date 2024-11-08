import React from 'react'

const Footer = () => {
    return (
        <footer className='flex justify-center pt-40 pb-20'>
            <div className='w-[400px] flex flex-col gap-16'>
                <p>
                    Contact me and let&apos;s talk about how I can capture your most important moments.
                </p>
                <a href="#" className='hover:underline'>
                    ✦ Get in touch
                </a>
                <span>© 2024</span>
            </div>
        </footer>
    )
}

export default Footer