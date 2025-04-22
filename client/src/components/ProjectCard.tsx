import { Project } from '../models/Projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-[30px] font-bold">{project.name}</h2>
      <p>{project.description}</p>
      <p className='text-[20px] font-bold'>Tech Stack:</p>
      <ul className="grid grid-cols-2 gap-4">
        {project.techStack.map((tech, index) => (
          <li key={index} className='border-2 border-[rgb(229,231,235)]'>{tech}</li>
        ))}
      </ul>
      <p className='font-bold text-[20px]'>
        <a href={project.url}>Visit Me!</a>
      </p>
    </div>
  )
}
