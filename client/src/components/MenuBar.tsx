type Props = {
  onSelect: (menu: string) => void
}

export default function MenuBar({ onSelect }: Props) {
  const menuBar = [
    { src: "/assets/icons/icon-contacts.png", alt: "About Me", action: () => onSelect('about') },
    { src: "/assets/icons/icon-projects.png", alt: "Projects", action: () => onSelect('project') },
    { src: "/assets/icons/icon-message.png", alt: "Message", action: () => onSelect('message') },
    { src: "/assets/icons/icon-finder.png", alt: "Resume", action: () => window.open("/assets/resume.pdf", "_blank") },
    { src: "/assets/icons/icon-git.png", alt: "Github", action: () => window.open("https://github.com/Daisychoi1995", "_blank") },
    { src: "/assets/icons/icon-linked-in.png", alt: "Linkedin", action: () => window.open("https://www.linkedin.com/in/daisy-choi-248306339", "_blank") },
  ]
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
  <nav className="flex flex-row flex-wrap justify-center gap-4 w-full max-w-[600px] bg-white/10 backdrop-blur-md py-2 px-4 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl">
    {menuBar.map((icon, index) => (
      <div key={index} className="group flex flex-col items-center cursor-pointer" onClick={icon.action}>
      <img
        src={icon.src}
        alt={icon.alt}
        className="w-12 sm:w-16 md:w-20 lg:w-[80px] h-auto hover:scale-110 transition"
      />
      <span className="mt-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {icon.alt}
      </span>
    </div>
    ))}
  </nav>
</div>

  )
}
