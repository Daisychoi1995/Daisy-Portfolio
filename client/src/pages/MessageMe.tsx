import clsx from 'clsx'
import { useState } from 'react'
import MessageCard from '../components/MessageCard'
import TitleBar from '../components/TitleBar'
import { useGetMessages } from '../hooks/useMessages'
import getCasualTimestamp from '../lib/getCasualTimestamp'
import { MessageExample } from '../models/Messages'
import LoadingPage from '../components/LoadingPage'
import MessageForm from '../components/MessageForm'
interface MessageMeProps {
  onClose: () => void
}

const MessageMe = ({ onClose }: MessageMeProps) => {
  const { data: messages, isLoading, isError } = useGetMessages()
  const [isMinimize, setIsMinimize] = useState(false)
  const [isMaximize, setIsMaximize] = useState(false)
  const [activeMessage, setActiveMessage] = useState<MessageExample | 'main'>(
    'main'
  )

  if (isLoading) return <LoadingPage />
  if (isError) return <p>Error!</p>
  if (!messages || !activeMessage) return null

  const renderMessageComponent = () => {
    return activeMessage === 'main' ? (
      <MessageForm />
    ) : (
      <MessageCard message={activeMessage} />
    )
  }

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
        <div className="flex flex-row p-4 gap-4 h-full min-h-0">
          <div className="flex flex-col overflow-auto w-[20%]">
            <div>
              <div
                className={clsx(
                  'flex py-4 px-2 border-b border-[rgb(134,126,126)] cursor-pointer items-center justify-center',
                  typeof activeMessage === 'string' && 'bg-gray-300'
                )}
                onClick={() => setActiveMessage('main')}
              >
                <h1 className="text-[20px] font-bold">Message Daisy</h1>
              </div>
              {messages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setActiveMessage(message)}
                  className={clsx(
                    'py-4 px-2 border-b-1 border-[rgb(134,126,126)] cursor-pointer',
                    typeof activeMessage !== 'string' && 
                    activeMessage.id === message.id && 'bg-gray-300'
                  )}
                >
                  <p className="text-[15px] font-bold">{message.name}</p>
                  <p className="text-[13px]">{message.question}</p>
                  <p className="text-[10px]">
                    {getCasualTimestamp(message.createdAt)}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[80%] h-full ">{renderMessageComponent()}</div>
        </div>
      </div>
    </div>
  )
}

export default MessageMe
