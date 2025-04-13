
type Props = {
  onSelect: (menu: string) => void
}

export default function MenuBar({ onSelect }: Props) {
  return (
    <div className=" fixed bottom-4 left-1/2 transform -translate-x-1/2">
      <nav className="flex flex-row justify-around w-full max-w-[500px] bg-white/10 backdrop-blur-md py-2 px-4 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl">
        <img src='/assets/icons/icon-contacts.png' alt='contacts' onClick={() => onSelect('about')} className="w-[80px] h-auto hover:scale-110 transition"/>
        <img src='/assets/icons/icon-finder.png' alt='finder' onClick={() => onSelect('project')} className="w-[80px] h-auto hover:scale-110 transition"/>
        <img src='/assets/icons/icon-message.png' alt='message' onClick={() => onSelect('gallery')} className="w-[80px] h-auto hover:scale-110 transition"/>
        <img src='/assets/icons/icon-photos.png' alt='photos' onClick={() => onSelect('message')} className="w-[80px] h-auto hover:scale-110 transition"/>
      </nav>
    </div>
  )
}