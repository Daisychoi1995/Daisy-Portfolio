import { useState } from 'react'
import AboutMe from './pages/AboutMe'
import MenuBar from './components/MenuBar'
import Project from './pages/Project'
import Gallery from './pages/Gallery'
import MessageMe from './pages/MessageMe'

//bg-[url('/assets/wallpaper.jpg)']
function App() {
  const [activeMenu, setActiveMenu] = useState('')
  return (
      <div className="bg-[url('/assets/wallpaper.jpg')] bg-cover bg-center h-screen">
        
        <MenuBar onSelect={setActiveMenu} />
        {activeMenu === 'about' && <AboutMe onClose={() => setActiveMenu('')}/>}
        {activeMenu === 'project' && <Project onClose={() => setActiveMenu('')} />}
        {activeMenu === 'gallery' && <Gallery onClose={() => setActiveMenu('')} />}
        {activeMenu === 'message' && <MessageMe onClose={() => setActiveMenu('')} />}
 
      </div>

  )
}

export default App
