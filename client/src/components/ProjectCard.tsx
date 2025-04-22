import { Project } from '../models/Projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full h-full bg-white py-2 px-8 rounded shadow mb-4 overflow-auto">
      <h2 className="text-[30px] font-bold my-4">{project.name}</h2>
      <p className='mb-4'>{project.description}</p>
      <p className="text-lg font-semibold mb-2">Tech Stack:</p>
      <div className="flex flex-row mb-4">
        <ul className="grid grid-cols-4 gap-2">
          {project.techStack.map((tech, index) => (
            <li
              key={index}
              className="border border-gray-300 px-3 py-1 rounded text-center"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <p className="font-bold text-[20px]">
        <a href={project.url}>Visit Me!</a>
      </p>
    </div>
  )
}
