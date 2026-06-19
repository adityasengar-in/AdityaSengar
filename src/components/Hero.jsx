import meImage from '../assets/me.png'

const Hero = () => {
  return (
    <section className='mx-auto max-w-4xl px-5 pt-20 sm:px-8 sm:pt-24 lg:pt-28'>
            <div className='flex flex-col-reverse items-start gap-7 sm:flex-row sm:items-center sm:justify-between sm:gap-10'>
                <div className='flex min-w-0 flex-col justify-center gap-3'>
                    <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl'>Hi, I'm Aditya 👋🏼</h1>
                    <p className='max-w-2xl text-base font-light leading-relaxed text-gray-500 sm:text-lg dark:text-zinc-400'>Developer who loves building things from scratch and seeing ideas come to life through code. 🚀</p>
                </div>
                <div className='shrink-0'>
                    <img className='size-28 rounded-full object-cover sm:size-32 lg:size-36' src={meImage} alt="Aditya Sengar" />
                </div>
            </div>
    </section>
  )
}

export default Hero
