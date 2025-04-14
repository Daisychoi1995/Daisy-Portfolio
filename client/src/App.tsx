import { useState } from 'react'
import AboutMe from './pages/AboutMe'
import MenuBar from './components/MenuBar'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import MessageMe from './pages/MessageMe'

//bg-[url('/assets/wallpaper.jpg)']
function App() {
  const [activeMenu, setActiveMenu] = useState('')
  return (
      <div className="bg-[url('/assets/wallpaper.jpg')] bg-cover bg-center h-screen">
        
        <MenuBar onSelect={setActiveMenu} />
        {activeMenu === 'about' && <AboutMe onClose={() => setActiveMenu('')}/>}
        {activeMenu === 'project' && <Projects onClose={() => setActiveMenu('')} />}
        {activeMenu === 'message' && <MessageMe onClose={() => setActiveMenu('')} />}
        {activeMenu === 'gallery' && <Gallery onClose={() => setActiveMenu('')} />}
 
      </div>

  )
}

export default App
