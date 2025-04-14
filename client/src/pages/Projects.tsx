import clsx from 'clsx'
import { useState } from 'react'
import { JSX } from 'react/jsx-runtime'
import MainProjectCard from '../components/MainProjectCard'
import ProjectCard from '../components/ProjectCard'
import TitleBar from '../components/TitleBar'
import { useGetProjects } from '../hooks/useProjects'
import { Project } from '../models/Projects'

const Projects = ({ onClose }: { onClose: () => void }) => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [isMaximize, setIsMaximize] = useState(false)
  const [activeProject, setActiveProject] = useState<Project>()
  const { data: projects, isLoading, isError } = useGetProjects()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error!</p>
  if (!projects) return null

  const projectComponents: Record<string, JSX.Element> = {
    Main: <MainProjectCard />,
    'Todo List': activeProject ? (
      <ProjectCard project={activeProject} />
    ) : (
      <></>
    ),
    ThreeBarFifty: activeProject ? (
      <ProjectCard project={activeProject} />
    ) : (
      <></>
    ),
    Portfolio: activeProject ? <ProjectCard project={activeProject} /> : <></>,
  }

  return (
    <div
      className={clsx(
        'bg-[rgb(229,231,235)] fixed left-1/2 transform -translate-x-1/2 rounded-lg',
        isMaximize
          ? 'w-full h-[85%] mb-20'
          : 'w-[90%] max-w-[600px] h-[70%] top-20',
        isMinimize && 'h-[40px]'
      )}
    >
      <div className="w-full h-full flex flex-col ">
        <TitleBar
          onClose={onClose}
          onMinimize={() => {
            setIsMaximize(false)
            setIsMinimize(true)
          }}
          onMaximize={() => {
            setIsMinimize(false)
            setIsMaximize(true)
          }}
        />
        <div className="flex flex-row p-4 overflow-auto gap-4">
          <div className="w-[30%]">
            {projects.map((project) => (
              <div key={project.id} className="w-full h-1/4 items-center">
                <h1 onClick={() => setActiveProject(project)}>
                  {project.name}
                </h1>
              </div>
            ))}
          </div>
          <div>
            {projectComponents[activeProject?.name ?? 'Main']}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
