import { useState } from 'react'
import TitleBar from '../components/TitleBar'
interface AboutMeProps {
  onClose: () => void
}

const AboutMe = ({ onClose }: AboutMeProps) => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [isMaximize, setIsMaximize] = useState(false)

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
        <div className="flex flex-col p-4">
          <div className="flex gap-4">
            <img
              src="/assets/main.jpg"
              className="w-[200px] h-auto rounded-full overflow-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-[70px] font-bo">Daisy Choi</h1>
              <h2 className='text-[30px]'>Software Developer</h2>
            </div>
          </div>
          <p className="text-[20px] ">I believe the best developers are the ones who never stop learning — and I bring that mindset into every line of code.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
