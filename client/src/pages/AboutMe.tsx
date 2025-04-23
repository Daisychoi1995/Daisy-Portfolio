import { useState } from 'react'
import TitleBar from '../components/TitleBar'
import clsx from 'clsx'
interface AboutMeProps {
  onClose: () => void
}

const AboutMe = ({ onClose }: AboutMeProps) => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [isMaximize, setIsMaximize] = useState(false)

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
        <div className="flex flex-col p-12">
          <div className="flex gap-4 mb-6">
            <img
              src="/assets/main.jpg"
              className="w-[200px] h-auto rounded-full overflow-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-[70px] font-bo">Daisy Choi</h1>
              <h2 className="text-[30px]">Software Developer</h2>
            </div>
          </div>
          <p className="text-[20px] ">
            I believe the best developers are those who never stop learning and
            I bring that mindset into every line of code. My journey into
            software engineering began with threebarfifty, a small dessert shop
            I started. Frustrated by the limitations of platforms like Wix, I
            wanted more control, which led me to discover my passion for coding.
            Since then, I've been continuously learning and growing, combining
            my technical skills with my entrepreneurial spirit to create
            impactful solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
