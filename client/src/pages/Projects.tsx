import clsx from 'clsx'
import { useState } from 'react'
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

  const renderProjectComponent = () => {
    if (!activeProject) return <MainProjectCard />
    return <ProjectCard project={activeProject} />
  }

  return (
    <div
      className={clsx(
        'bg-[rgb(229,231,235)] fixed left-1/2 transform -translate-x-1/2 rounded-lg',
        isMaximize
          ? 'w-full h-[85%] mb-20'
          : 'w-[100%] max-w-[900px] h-[70%] top-20',
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
        <div className="flex flex-row p-4 gap-4 h-full min-h-0">
          <div className="w-[30%] overflow-auto">
            <div className="w-full h-1/4 items-center">
            <div className="py-4 border-b-1 border-[rgb(134,126,126)] cursor-pointer">
              <h1
                className="text-[30px] pl-2"
                onClick={() => setActiveProject(undefined)}
              >
                Main
              </h1>
              </div>
              {projects.map((project) => (
                <div key={project.id} className="py-4 border-b-1 border-[rgb(134,126,126)] cursor-pointer">
                  <h1 onClick={() => setActiveProject(project)} className="text-[30px] pl-2">
                    {project.name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[70%] h-full">{renderProjectComponent()}</div>
        </div>
      </div>
    </div>
  )
}

export default Projects
