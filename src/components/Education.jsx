import React from 'react'
import psitImg from '../assets/psit.svg'
import schoolImg from'../assets/drslpps.png'
const Education = () => {
  return (
    <div className='px-45 pt-15'>
            <div className='text-xl mb-2 font-bold'>
                Education
            </div>
            <div className='mb-5'>
                    <div className='border border-gray-200 border-solid shadow-xl shadow-gray-200 rounded-2xl h-25 w-100% flex flex-row justify-between items-center px-7'>
                    <div className='flex flex-row gap-5'>
                        <div className='bg-white w-16 h-16 rounded-[400px] border border-solid border-gray-200'>
                            <img className=' mt-1 p-3' src={psitImg} alt="ed" />
                        </div>
                        <div>
                            <div className='flex flex-col justify-center pt-2 text-[15px]'>
                                <div className='font-medium'>Pranveer Singh Institute of Technology, Kanpur</div>
                                <div className='text-gray-600 font-light text-[13px]'>Bachelor of Technology, Computer Science and Engineering - (AI & ML) </div>
                            </div>
                        </div>
                    </div>
                    <div className='font-light text-gray-600'>
                        2023 - 2027
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                    <div className='border border-gray-200 border-solid shadow-xl shadow-gray-200 rounded-2xl h-25 w-100% flex flex-row justify-between items-center px-7'>
                    <div className='flex flex-row gap-5'>
                        <div className='bg-white w-16 h-16 rounded-[400px] border border-solid border-gray-200'>
                            <img className='p-3 pr-3.5' src={schoolImg} alt="ed" />
                        </div>
                        <div>
                            <div className='flex flex-col justify-center pt-2'>
                                <div className='font-medium text-[15px]'>Dr. Soney Lal Patel School, Kanpur</div>
                                <div className='text-gray-600 font-light text-[13px]'>12th with Science</div>
                            </div>
                        </div>
                    </div>
                    <div className='font-light text-gray-600'>
                        2021 - 2022
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Education