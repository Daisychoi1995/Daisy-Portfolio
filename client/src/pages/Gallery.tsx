import { useState } from 'react'
import TitleBar from '../components/TitleBar'
interface GalleryProps {
  onClose: () => void
}

const Gallery = ({ onClose }: GalleryProps) => {
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
     
         
        </div>
      </div>
    </div>
  )
}

export default Gallery
