import { section } from 'framer-motion/client'
import React from 'react'
import meImage from '../assets/me.png'

const Hero = () => {
  return (
    <section>
        <div className='px-75 pt-25'>
            <div className='flex flex-row justify-between px-20'>
                <div className='flex flex-col justify-center gap-2'>
                    <div className='text-6xl font-semibold'>Hi, I'm Aditya 👋🏼</div>
                    <div className='text-[18px] text-gray-500 font-light'>Developer who loves building things from scratch and <br /> seeing ideas come to life through code.🚀</div>
                </div>
                <div>
                    <img className='rounded-[400px] h-37' src={meImage} alt="Dev" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero