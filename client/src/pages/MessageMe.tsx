import clsx from 'clsx'
import { useState } from 'react'
import TitleBar from '../components/TitleBar'
import { useGetMessages } from '../hooks/useMessages'
import MessageForm from '../components/MessageForm'
interface MessageMeProps {
  onClose: () => void
}

const MessageMe = ({ onClose }: MessageMeProps) => {
  const [isMinimize, setIsMinimize] = useState(false)
  const [isMaximize, setIsMaximize] = useState(false)
  const { data: messages, isLoading, isError } = useGetMessages()
  
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error!</p>
  if (!messages) return null
  
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
        <div className="flex flex-col p-4">
          <p>{messages.map(message => <li key={message.id}>
            <p>{message.name}</p>
            <p>{message.description}</p>
            <p>{message.contact}</p>
            <p>{new Date(message.createdAt).toLocaleString()}</p>
          </li>)}</p>
        </div>
        <MessageForm />
      </div>
    </div>
  )
}

export default MessageMe
