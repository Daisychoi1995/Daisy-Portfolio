import { Project } from '../models/Projects'

export default function ProjectCard({ project }: { project: Project }) {
  if (!project) return null
  console.log(project)
  return (
    <div className="w-full h-full bg-white py-2 px-8 rounded shadow mb-4 overflow-auto">
      <div className='flex flex-col justify-center items-center mb-6'>
      <h2 className="text-[40px] font-bold ustify-center">{project.name}</h2>
      {project.imageUrl?.length === 0 ? null : <a href={project.url}><img src={project.imageUrl} alt={project.name} className='w-80 my-4'/></a>}
      </div>
      <p className='mb-4'>{project.description}</p>
      <p className="text-lg font-semibold mb-2">Tech Stack:</p>
      <div className="flex flex-row mb-4">
        <ul className="grid grid-cols-4 gap-2">
          {project.techStack?.map((tech, index) => (
            <li
              key={index}
              className="border border-gray-300 px-3 py-1 rounded text-center"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-row justify-center items-center'>
      {project.url?.length === 0 ? null : <a href={project.url} target="_blank"><img src='/assets/icons/icon-chrome.png' alt='contacts' className="w-[60px] h-auto hover:scale-110 transition"/></a>}
      {project.github?.length === 0 ? null : <a href={project.github} target="_blank"><img src='/assets/icons/icon-git.png' alt='contacts' className="w-[60px] h-auto hover:scale-110 transition"/></a>}
      </div>
    </div>
  )
}
