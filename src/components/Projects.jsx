import portfolioImg from'../assets/portfolio.jpeg'
import travelloImg from'../assets/travello.jpeg'

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
    <section id='Projects' className='mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-16'>
        <span className='rounded-lg bg-black px-3 py-1 pb-1.5 text-[14px] font-light text-white dark:bg-white dark:text-black'>My Projects</span>
        <h2 className='mt-4 text-3xl font-bold tracking-tight sm:text-4xl'>Check out my latest work</h2>

        <div className='mx-auto mt-6 grid max-w-200 auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2' >
          <a className='block h-full' href="https://adityasengar.vercel.app/" target='_blank' rel='noreferrer'>
            <article className='flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 text-left transition-colors dark:border-zinc-800 dark:bg-zinc-900/40'>
              <div>
              <img className='aspect-[16/10] w-full border-b border-gray-200 object-cover dark:border-zinc-800' src={portfolioImg} alt="PortfolioV01 preview" />
              </div>
              <div className='flex flex-1 flex-col gap-2 p-4'>
                <div className='flex flex-col items-start'>
                  <h3 className='font-semibold'>PortfolioV01</h3>
                  <time className='text-[13px] font-light text-gray-500 dark:text-zinc-400'>March 2026</time>
                </div>
                <div className='flex items-start text-[14px]'>
                  <p className='text-left font-light leading-relaxed text-gray-500 dark:text-zinc-400'>
                    Designed and developed a high-performance portfolio application with React, leveraging reusable UI components, and optimized user experience.
                  </p>
                </div>
                <div className='mt-auto flex flex-wrap gap-1 pt-1'>
                  {technologies_Portfolio.map((technology)=>(
                    <div
                    key={technology.name}
                    className='flex items-center gap-1 rounded-[8px] border border-gray-200 px-2 py-1 text-[10px] font-medium text-gray-800 dark:border-zinc-700 dark:text-zinc-300'
                    >
                      {technology.name}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </a>
          <a className='block h-full' href="https://travello-site.vercel.app/" target='_blank' rel='noreferrer'>
            <article className='flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 text-left transition-colors dark:border-zinc-800 dark:bg-zinc-900/40'>
              <div>
              <img className='aspect-[16/10] w-full border-b border-gray-200 object-cover dark:border-zinc-800' src={travelloImg} alt="Travello preview" />
              </div>
              <div className='flex flex-1 flex-col gap-2 p-4'>
                <div className='flex flex-col items-start'>
                  <h3 className='font-semibold'>Travello</h3>
                  <time className='text-[13px] font-light text-gray-500 dark:text-zinc-400'>November 2025</time>
                </div>
                <div className='flex items-start text-[14px]'>
                  <p className='text-left font-light leading-relaxed text-gray-500 dark:text-zinc-400'>
                    A clean and modern web-based travel planner, helps users plan trips in a simple, intuitive, and visually polished way.
                  </p>
                </div>
                <div className='mt-auto flex flex-wrap gap-1 pt-1'>
                  {technologies_Travello.map((technology)=>(
                    <div
                    key={technology.name}
                    className='flex items-center gap-1 rounded-[8px] border border-gray-200 px-2 py-1 text-[10px] font-medium text-gray-800 dark:border-zinc-700 dark:text-zinc-300'
                    >
                      {technology.name}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </a>
        </div>
    </section>
  )
}

export default Projects
