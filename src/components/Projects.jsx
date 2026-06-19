import React from 'react'
import portfolioImg from'../assets/portfolio.jpeg'
import travelloImg from'../assets/travello.jpeg'
import { div } from 'framer-motion/client';

const technologies_Portfolio = [
    {name:"HTML"},
    {name:"CSS"},
    {name: "JavaScript"},
    {name: "React"},
    {name: "Tailwind CSS"},
    {name: "Vite"},
    {name: "Figma"},
    {name: "Git"},
    {name: "GitHub"},
    {name: "Vercel"},
];
const technologies_Travello = [
    {name:"HTML"},
    {name:"CSS"},
    {name: "JavaScript"},
    {name: "React"},
    {name: "Tailwind CSS"},
    {name: "Vite"},
    {name: "Figma"},
    {name: "Git"},
    {name: "GitHub"},
    {name: "Vercel"},
    {name: "GrokAPI"},
    {name: "MongoDB"},
];

const Projects = () => {
  return (
    <div id='Projects'className='py-12 text-center'>
        <span className='px-3 py-1 rounded-lg bg-black text-white font-light text-[14px] pb-1.5'>My Projects</span>
        <div className='mt-4 text-4xl font-bold'>Check out my latest work</div>

        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-200 mx-auto auto-rows-fr mt-5' >
          <a href="https://adityasengar.vercel.app/">
            <div className='flex flex-col border border-solid border-gray-200 rounded-xl '>
              <div>
              <img className='border-b border-gray-200 rounded-t-xl' src={portfolioImg} alt="" />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col items-start pt-2 pl-4'>
                  <h3 className='font-semibold'>PortfolioV01</h3>
                  <time className='font-light text-gray-500 text-[13px]'>March 2026</time>
                </div>
                <div className='pl-4 flex items-start text-[14px]'>
                  <p className='text-left text-gray-500 font-light'>
                    Designed and developed a high-performance portfolio application with React, leveraging reusable UI components, and optimized user experience.
                  </p>
                </div>
                <div className='pl-4 pr-2 flex flex-wrap gap-1'>
                  {technologies_Portfolio.map((technology)=>(
                    <div
                    className='flex items-center gap-1 px-2 py-1 rounded-[8px] border border-gray-200 text-[10px] font-medium text-gray-800'
                    >
                      {technology.name}
                    </div>
                  ))}
                </div>
                <div className='p-1'></div>
              </div>
            </div>
          </a>
          <a href="https://travello-site.vercel.app/">
            <div className='flex flex-col border border-solid border-gray-200 rounded-xl '>
              <div>
              <img className='border-b border-gray-200 rounded-t-xl' src={travelloImg} alt="" />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex flex-col items-start pt-2 pl-4'>
                  <h3 className='font-semibold'>Travello</h3>
                  <time className='font-light text-gray-500 text-[13px]'>November 2025</time>
                </div>
                <div className='pl-4 pr-4 flex items-start text-[14px]'>
                  <p className='text-left text-gray-500 font-light'>
                    A clean and modern web-based travel planner, helps users plan trips in a simple, intuitive, and visually polished way.
                  </p>
                </div>
                <div className='pl-4 pr-2 flex flex-wrap gap-1'>
                  {technologies_Travello.map((technology)=>(
                    <div
                    className='flex items-center gap-1 px-2 py-1 rounded-[8px] border border-gray-200 text-[10px] font-medium text-gray-800'
                    >
                      {technology.name}
                    </div>
                  ))}
                </div>
                <div className='p-1'></div>
              </div>
            </div>
          </a>
        </div>
    </div>
  )
}

export default Projects