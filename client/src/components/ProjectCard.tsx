import { Project } from "../models/Projects"


export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold">{project.name}</h2>
      <p>{project.description}</p>
      <p>Tech Stack: {project.techStack.map(tech => <p>{tech}</p>)}</p>
      <p>{project.url}</p>
    </div>
  )
}