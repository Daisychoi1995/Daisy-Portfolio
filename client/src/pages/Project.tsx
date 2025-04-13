import { useState } from 'react'
import { useGetProjects } from '../hooks/useProjects'
import TitleBar from '../components/TitleBar'

const Project = ({ onClose }: { onClose: () => void }) => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [isMaximize, setIsMaximize] = useState(false)
  const { data: projects, isLoading, isError } = useGetProjects()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error!</p>
  if (projects) {
    return (
      <div
        className={`bg-[rgb(229,231,235)] fixed  left-1/2 transform -translate-x-1/2 rounded-lg ${
          isMaximize
            ? 'w-full h-[85%] mb-20'
            : 'w-[90%] max-w-[600px] h-[70%] top-20'
        } ${isMinimize ? 'h-[40px]' : ''}`}
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
          <div className="flex p-4 overflow-auto">
            <div className="flex flex-col ">
              {projects.map((project) => (
                <h1>{project.name}</h1>
              ))}
            </div>
            <div>
              <ul>
                {projects.map((project) => (
                  <li>
                    <p className='text-[20px]'>{project.name}</p>
                    <p>{project.description}</p>
                    <p>{project.tech_stack}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
