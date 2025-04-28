import getCasualTimestamp from '../lib/getCasualTimestamp'
import { MessageExample } from '../models/Messages'

export default function MessageCard({ message }: { message: MessageExample }) {
  return (
    <div className="w-full h-full bg-white px-6 rounded shadow mb-4 overflow-auto relative">
      <div className="h-full overflow-scroll mt-2 mb-0">
        <div className='ml-4 mt-4'>
        <h2 className="text-[25px] font-bold mb-2">
          {message.name} ({message.contact})
        </h2>
        <p className="mb-4 text-[rgb(152,152,153)] text-[13px] text-center">
          {getCasualTimestamp(message.createdAt)}
        </p>
        </div>
        <div className='mx-4 flex flex-col'>
          <div className="relative w-auto ml-auto mb-4 max-w-[90%]">
            <div className="bg-blue-500 text-white text-[18px] px-6 py-3 rounded-[30px] rounded-br-[4px]">
              <p>{message.question}</p>
            </div>
            <div className="absolute bottom-[-8px] right-[2px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-blue-500"></div>
          </div>
          <div className="relative w-auto flex flex-col mr-auto max-w-[90%]">
            <div className="bg-green-500 text-white text-[18px] px-6 py-3 rounded-[30px] rounded-bl-[4px]">
              <p>{message.description}</p>
            </div>
            <div className="absolute bottom-[-8px] left-[2px] w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
