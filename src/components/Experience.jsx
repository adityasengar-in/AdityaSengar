import React from 'react'
import meetkatsImg from '../assets/meetkats.jpg'
import gdgImg from '../assets/gdg.jpeg'

const Experience = () => {
  return (
    <div className='px-45 pt-15'>
        <div className='text-xl mb-2 font-bold'>
            Experience
        </div>
        <div className='mb-5'>
                <div className='border border-gray-200 border-solid shadow-xl shadow-gray-200 rounded-2xl h-25 w-100% flex flex-row justify-between items-center px-7'>
                <div className='flex flex-row gap-5'>
                    <div>
                        <img className='rounded-[400px] border border-solid border-gray-200 w-16 h-16' src={meetkatsImg} alt="Inc" />
                    </div>
                    <div>
                        <div className='flex flex-col justify-center pt-2'>
                            <div className='font-medium text-[15px]'>Meetkats</div>
                            <div className='text-gray-600 font-light text-[14px]'>UI & Frontend Intern</div>
                        </div>
                    </div>
                </div>
                <div className='font-light text-gray-600'>
                    May 2025 - Aug 2025
                </div>
            </div>
        </div>
        <div className='mb-5'>
                <div className='border border-gray-200 border-solid shadow-xl shadow-gray-200 rounded-2xl h-25 w-100% flex flex-row justify-between items-center px-7'>
                <div className='flex flex-row gap-5'>
                    <div>
                        <img className='rounded-[400px] border border-solid border-gray-200 w-16 h-16' src={gdgImg} alt="Inc" />
                    </div>
                    <div>
                        <div className='flex flex-col justify-center pt-2'>
                            <div className='font-medium text-[15px]'>Google Developers Group</div>
                            <div className='text-gray-600 font-light text-[14px]'>Graphic Designer</div>
                        </div>
                    </div>
                </div>
                <div className='font-light text-gray-600'>
                    Sep 2025 - Oct 2025
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Experience