import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import CurriculumVitae from './pages/CV'
import Projects from './pages/Projects'
import Publications from './pages/Publications'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} /> {/* Default route */}
        <Route path='/cv' element={<CurriculumVitae />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/publications' element={<Publications />} />
      </Routes>
    </Layout>
  )
}

export default App
