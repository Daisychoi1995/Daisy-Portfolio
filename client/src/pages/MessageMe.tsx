import clsx from 'clsx'
import { useState } from 'react'
import MessageCard from '../components/MessageCard'
import TitleBar from '../components/TitleBar'
import { useGetMessages } from '../hooks/useMessages'
import getCasualTimestamp from '../lib/getCasualTimestamp'
import { MessageExample } from '../models/Messages'
interface MessageMeProps {
  onClose: () => void
}

const MessageMe = ({ onClose }: MessageMeProps) => {
  const { data: messages, isLoading, isError } = useGetMessages()
  const [isMinimize, setIsMinimize] = useState(false)
  const [isMaximize, setIsMaximize] = useState(false)
  const [activeMessage, setActiveMessage] = useState<
    MessageExample | undefined
  >(messages?.find((message) => message.id === 1))
  const [hover, setHover] = useState(false)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error!</p>
  if (!messages || !activeMessage) return null

  const renderMessageComponent = () => {
    return <MessageCard message={activeMessage} />
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
          <div className="flex flex-col overflow-auto w-[30%]">
            <div>
              {messages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setActiveMessage(message)}
                  className={clsx(
                    'py-4 px-2 border-b-1 border-[rgb(134,126,126)] cursor-pointer',
                    activeMessage.id === message.id && 'bg-gray-300'
                  )}
                >
                  <p className="text-[20px] font-bold">{message.name}</p>
                  <p className="text-[18px]">{message.description}</p>
                  <p className="text-[12px]">
                    {getCasualTimestamp(message.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[70%] h-full">{renderMessageComponent()}</div>
        </div>
      </div>
    </div>
  )
}

export default MessageMe
