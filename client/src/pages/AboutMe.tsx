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
        <div className="flex flex-col p-8 overflow-scroll h-full min-h-0">
          <div className="flex gap-4 mb-6 justify-center">
            <img
              src="/assets/main.jpg"
              className="w-[200px] h-auto rounded-full overflow-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-[70px] font-bo">Daisy Choi</h1>
              <h2 className="text-[30px]">Software Developer</h2>
            </div>
          </div>
          <div className="px-12">
            <ul>
              <li>
                💡 I believe the best developers are those who never stop
                learning — and I bring that mindset into every line of code.
              </li>
              <li>
                🍰 My journey into software engineering began with{' '}
                <strong>threebarfifty</strong>, a small dessert shop I started.
              </li>
              <li>
                💻 Wanting more control over my business led me to discover a
                passion for coding.
              </li>
              <li>
                🎯 I love challenging myself, and diving into coding became the
                perfect way to grow both personally and professionally. 📚🌱
              </li>
              <li>
                💼 Today, I combine technical skills with an entrepreneurial
                spirit to create solutions that make a real impact. 🌟
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
