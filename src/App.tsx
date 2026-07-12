import { Route, Routes } from 'react-router'
import NavBar from './components/layout/NavBar'
import Projects from './pages/Projects'
import Articels from './pages/Articels'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-3">
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/articels" element={<Articels />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}
export default App
