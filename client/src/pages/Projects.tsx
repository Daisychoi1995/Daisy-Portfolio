import clsx from 'clsx'
import { useState } from 'react'
import MainProjectCard from '../components/MainProjectCard'
import ProjectCard from '../components/ProjectCard'
import TitleBar from '../components/TitleBar'
import { useGetProjects } from '../hooks/useProjects'
import { Project } from '../models/Projects'
import LoadingPage from '../components/LoadingPage'

const Projects = ({ onClose }: { onClose: () => void }) => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [isMaximize, setIsMaximize] = useState(false)
  const { data: projects, isLoading, isError } = useGetProjects()
  const [activeProject, setActiveProject] = useState<Project | 'main'>('main')

  if (isLoading) return <LoadingPage />
  if (isError) return <p>Error!</p>
  if (!projects) return null

  const renderProjectComponent = () => {
    return activeProject === 'main'
    ? <MainProjectCard />
    : <ProjectCard project={activeProject} />
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
              <div
                className={clsx(
                  'py-4 px-2 border-b border-[rgb(134,126,126)] cursor-pointer',
                  typeof activeProject === 'string' && 'bg-gray-300'
                )}
                onClick={() => setActiveProject('main')}
              >
                <h1 className="text-[20px] pl-2">Tech Stack</h1>
              </div>
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className={clsx(
                    'py-4 px-2 border-b border-[rgb(134,126,126)] cursor-pointer',
                    typeof activeProject !== 'string' &&
                      activeProject?.id === project.id &&
                      'bg-gray-300'
                  )}
                >
                  <h1 className="text-[20px] pl-2">{project.name}</h1>
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
