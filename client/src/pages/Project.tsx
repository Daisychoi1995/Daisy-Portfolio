const Project = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="bg-blue-500">
      <div
        onClick={onClose}
        className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
      >
        <p className="text-[70px]">im project</p>
      <a href="http://daisy-todo.devacademy.nz/">Todo List</a>
      <a href="https://three-bar-fifty.firebaseapp.com/">ThreeBarfifty</a>
      <a href="https://www.threebarfifty.com/">ThreeBarfifty Live Demo</a>
      </div>
    </div>
  )
}

export default Project
