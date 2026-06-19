import React from 'react'

const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Django", icon: "https://www.svgrepo.com/show/353657/django-icon.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Vercel", icon: "https://www.svgrepo.com/show/327408/logo-vercel.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "DSA", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
    { name: "OOP", icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { name: "DBMS", icon: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
];

const Skills = () => {
  return (
    <div className='px-45 pt-15'>
        <div className='text-xl mb-2 font-bold'>
            Skills
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
            <div
                key={skill.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-800"
            >
                <img src={skill.icon} alt={skill.name} className="w-4 h-4" />
                {skill.name}
            </div>
            ))}
        </div>
    </div>
  )
}

export default Skills