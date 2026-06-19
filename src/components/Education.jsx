import psitImg from '../assets/psit.svg'
import schoolImg from'../assets/drslpps.png'
const Education = () => {
  return (
    <section className='mx-auto max-w-4xl px-5 pt-14 sm:px-8 sm:pt-16'>
            <div className='text-xl mb-2 font-bold'>
                Education
            </div>
            <div className='mb-5'>
                    <div className='flex flex-col gap-3 rounded-2xl border border-gray-200 p-4 shadow-xl shadow-gray-200/70 transition-colors sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-black/20'>
                    <div className='flex min-w-0 flex-row items-center gap-3 sm:gap-5'>
                        <div className='size-14 shrink-0 rounded-full border border-gray-200 bg-white sm:size-16 dark:border-zinc-700'>
                            <img className=' mt-1 p-3' src={psitImg} alt="ed" />
                        </div>
                        <div>
                            <div className='flex flex-col justify-center pt-2 text-[15px]'>
                                <div className='font-medium'>Pranveer Singh Institute of Technology, Kanpur</div>
                                <div className='text-[13px] font-light leading-relaxed text-gray-600 dark:text-zinc-400'>Bachelor of Technology, Computer Science and Engineering - (AI & ML) </div>
                            </div>
                        </div>
                    </div>
                    <div className='pl-17 text-sm font-light text-gray-600 sm:shrink-0 sm:pl-0 dark:text-zinc-400'>
                        2023 - 2027
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                    <div className='flex flex-col gap-3 rounded-2xl border border-gray-200 p-4 shadow-xl shadow-gray-200/70 transition-colors sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-black/20'>
                    <div className='flex min-w-0 flex-row items-center gap-3 sm:gap-5'>
                        <div className='size-14 shrink-0 rounded-full border border-gray-200 bg-white sm:size-16 dark:border-zinc-700'>
                            <img className='p-3 pr-3.5' src={schoolImg} alt="ed" />
                        </div>
                        <div>
                            <div className='flex flex-col justify-center pt-2'>
                                <div className='font-medium text-[15px]'>Dr. Soney Lal Patel School, Kanpur</div>
                                <div className='text-[13px] font-light text-gray-600 dark:text-zinc-400'>12th with Science</div>
                            </div>
                        </div>
                    </div>
                    <div className='pl-17 text-sm font-light text-gray-600 sm:shrink-0 sm:pl-0 dark:text-zinc-400'>
                        2021 - 2022
                    </div>
                </div>
            </div>
            
        </section>
  )
}

export default Education
