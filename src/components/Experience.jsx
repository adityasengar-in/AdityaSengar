import meetkatsImg from '../assets/meetkats.jpg'
import gdgImg from '../assets/gdg.jpeg'

const Experience = () => {
  return (
    <section className='mx-auto max-w-4xl px-5 pt-14 sm:px-8 sm:pt-16'>
        <div className='text-xl mb-2 font-bold'>
            Experience
        </div>
        <div className='mb-5'>
                <div className='flex flex-col gap-3 rounded-2xl border border-gray-200 p-4 shadow-xl shadow-gray-200/70 transition-colors sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-black/20'>
                <div className='flex min-w-0 flex-row items-center gap-3 sm:gap-5'>
                    <div>
                        <img className='size-14 rounded-full border border-gray-200 object-cover sm:size-16 dark:border-zinc-700' src={meetkatsImg} alt="Meetkats" />
                    </div>
                    <div>
                        <div className='flex flex-col justify-center pt-2'>
                            <div className='font-medium text-[15px]'>Meetkats</div>
                            <div className='text-[14px] font-light text-gray-600 dark:text-zinc-400'>UI & Frontend Intern</div>
                        </div>
                    </div>
                </div>
                <div className='pl-17 text-sm font-light text-gray-600 sm:pl-0 dark:text-zinc-400'>
                    May 2025 - Aug 2025
                </div>
            </div>
        </div>
        <div className='mb-5'>
                <div className='flex flex-col gap-3 rounded-2xl border border-gray-200 p-4 shadow-xl shadow-gray-200/70 transition-colors sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-black/20'>
                <div className='flex min-w-0 flex-row items-center gap-3 sm:gap-5'>
                    <div>
                        <img className='size-14 rounded-full border border-gray-200 object-cover sm:size-16 dark:border-zinc-700' src={gdgImg} alt="Google Developers Group" />
                    </div>
                    <div>
                        <div className='flex flex-col justify-center pt-2'>
                            <div className='font-medium text-[15px]'>Google Developers Group</div>
                            <div className='text-[14px] font-light text-gray-600 dark:text-zinc-400'>Graphic Designer</div>
                        </div>
                    </div>
                </div>
                <div className='pl-17 text-sm font-light text-gray-600 sm:pl-0 dark:text-zinc-400'>
                    Sep 2025 - Oct 2025
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Experience
