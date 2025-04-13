const Gallery = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="bg-blue-500">
      <div
        onClick={onClose}
        className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
      >
        <p className="text-[70px]">im gallery</p>
      </div>
    </div>
  )
}

export default Gallery
