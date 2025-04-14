interface TitleBarProps {
  onClose: () => void
  onMaximize: () => void
  onMinimize: () => void
}
export default function TitleBar({ onClose, onMaximize, onMinimize }: TitleBarProps) {

  return (
    <div className="h-[30px] bg-[#F3F4F6] border-gray-200 flex items-center px-4 rounded-t-lg">
          <div className="flex space-x-2">
            <div
              onClick={onClose}
              title="Close"
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
            ></div>
            <div
              onClick={onMinimize}
              title="Minimize"
              className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"
            ></div>
            <div
              onClick={onMaximize}
              title="Maximize"
              className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
            ></div>
          </div>
        </div>
  )
}
