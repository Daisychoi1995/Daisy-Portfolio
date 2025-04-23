import getCasualTimestamp from '../lib/getCasualTimestamp'
import { Message } from '../models/Messages'
import MessageForm from './MessageForm'

export default function MessageCard({ message }: { message: Message }) {
  

  return (
    <div className="w-full h-full bg-white py-2 pl-12 rounded shadow mb-4 overflow-auto relative">
    <div className='h-[70%] overflow-scroll mb-0'>
      <h2 className="text-[30px] font-bold my-4">
        {message.name} ({message.contact})
      </h2>
      <p className="mb-4 text-[rgb(152,152,153)] text-[13px] text-center">
        {getCasualTimestamp(message.createdAt)}
      </p>
      <div className="relative max-w-[75%] mb-4 ml-20">
        <div className="bg-blue-500 text-white text-[18px] p-6 rounded-[30px] rounded-br-[4px]">
          <p>{message.description}</p>
        </div>
        <div className="absolute bottom-[-8px] right-[2px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500"></div>
      </div>
    </div>
    <div className="absolute bottom-0 w-full mt-0">
      <MessageForm />
    </div>
  </div>
  )
}
