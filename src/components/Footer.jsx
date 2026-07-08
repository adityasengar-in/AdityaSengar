const Footer = () => {
  return (
    <footer className="px-5 py-14 text-center sm:px-8 sm:py-16">
      <a className='inline-block rounded-lg bg-black px-3 py-1 pb-1.5 text-[14px] font-light text-white dark:bg-white dark:text-black' target='_blank' rel='noreferrer' href="https://drive.google.com/file/d/1pTF-YCijflKJI5L1-M7FZTjuCVeroArN/view?usp=sharing">Resume</a>
      <div className='mt-4 text-4xl font-bold tracking-tight sm:text-5xl'>Get in Touch</div>
      <div className='mx-auto mt-3 max-w-2xl text-base font-light leading-relaxed text-gray-500 sm:text-xl dark:text-zinc-400'>Just shoot me a dm with a direct question on <a className='text-blue-500 dark:text-blue-400' target='_blank' rel='noreferrer' href="https://x.com/adityasengar_in">twitter/X.</a></div>
      <p className="text-zinc-500 text-sm mt-8">
        © {new Date().getFullYear()} Aditya Sengar
      </p>
      <div className='h-20 sm:h-24'></div>
    </footer>
  )
}

export default Footer
