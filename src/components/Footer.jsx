import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 text-center ">
      <span className='px-3 py-1 rounded-lg bg-black text-white font-light text-[14px] pb-1.5'><a href="https://drive.google.com/file/d/1F3NIL_aGvc_x0qj4kaTsUVz70iCLPFJD/view?usp=drive_link">Resume</a></span>
      <div className='mt-4 text-5xl font-bold'>Get in Touch</div>
      <div className='mt-3 text-xl text-gray-500 font-light'>Just shoot me a dm with a direct question on <a className='text-blue-500' target='_blank' href="https://x.com/adityasengar_in">twitter/X.</a></div>
      <p className="text-zinc-500 text-sm mt-8">
        © {new Date().getFullYear()} Aditya Sengar
      </p>
      <div className='h-25 w-100%'></div>
    </footer>
  )
}

export default Footer