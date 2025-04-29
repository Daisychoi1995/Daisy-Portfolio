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
          ? 'w-full h-[82%] mb-20'
          : 'w-[100%] max-w-[900px] h-[70%] top-10',
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
        <div className="flex flex-row p-8 overflow-scroll h-full min-h-0 justify-center items-center">
          <div className="flex flex-col gap-4 mb-6 justify-center w-[50%] items-center">
            <img
              src="/assets/main.jpg"
              className="w-[200px] h-auto rounded-full"
            />
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[30px] font-bold">Daisy Choi</h1>
              <h1 className="text-[20px] font-bold">Full-stact Developer</h1>
              {/* <h2 className="text-[30px]">🎓 Electronic Engineering → 🍰 Dessert shop owner → 💻 Software Engineer</h2> */}
            </div>
          </div>
          <div className="px-8">
            <ul>
              <li className="text-[20px] font-bold">
                Electronic Engineering → Dessert shop owner → Full-stact
                Developer
              </li>
              <li>
                My journey into software development kicked off when I built a
                custom website for my dessert shop,{' '}
                <strong>Threebarfifty</strong>.
              </li>
              <li>
                I wanted more control and ownership over what I was building
                and that curiosity pulled me into full-stack development.
              </li>
              <li>
                Before all this, I studied Electronic Engineering, which gave me
                a solid foundation for problem-solving (and a habit of asking
                "why?" way too much).
              </li>
              <li>
                Later, I expanded my skills even more through hands-on training
                at Dev Academy, diving into both front-end and back-end
                projects.
              </li>
              <li>
                Now, I’m passionate about building scalable systems, solving
                real-world problems, and always pushing myself to learn
                something new.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
