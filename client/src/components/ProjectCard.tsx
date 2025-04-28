import { Project } from '../models/Projects'

export default function ProjectCard({ project }: { project: Project }) {
  if (!project) return null
  console.log(project)
  return (
    <div className="w-full h-full py-2 px-8 rounded bg-white mb-4 overflow-auto shadow">
      <div className="flex flex-row justify-center items-center mb-6 gap-4 mt-4">
        {/* <h2 className="text-[40px] font-bold ustify-center">{project.name}</h2> */}
        <div className='w-[40%]'>
        {project.imageUrl?.length === 0 ? null : (
          <a href={project.url}>
            <img
              src={project.imageUrl}
              alt={project.name}
              className="my-4"
            />
          </a>
        )}
        </div>

        <p className="w-[60%]">{project.description}</p>
      </div>
      <div className="flex flex-row mb-4">
        <ul className="grid grid-cols-5 gap-2">
          {project.techStack?.map((tech, index) => (
            <li
              key={index}
              className="border border-gray-300 px-3 py-1 rounded-lg text-center"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-center items-center">
        {project.url?.length === 0 ? null : (
          <a href={project.url} target="_blank">
            <img
              src="/assets/icons/icon-chrome.png"
              alt="contacts"
              className="w-[60px] h-auto hover:scale-110 transition"
            />
          </a>
        )}
        {project.github?.length === 0 ? null : (
          <a href={project.github} target="_blank">
            <img
              src="/assets/icons/icon-git.png"
              alt="contacts"
              className="w-[60px] h-auto hover:scale-110 transition"
            />
          </a>
        )}
      </div>
    </div>
  )
}
