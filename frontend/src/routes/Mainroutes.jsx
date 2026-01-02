
import { Route, Routes } from 'react-router-dom'
import Hero from '../components/Hero'
import Firstpage from '../pages/Firstpage'
import Blogs from '../pages/Blogs' 
import BlogDetail from '../pages/BlogDetail'
import Gallery from '../pages/Gallery'
import About from '../pages/About'
import AI from '../pages/AI'
import Pagenotfound from '../pages/Pagenotfound'
import Workspace from '../pages/ProjectWorkspace'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Firstpage />
    </>
  )
}

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:slug" element={<BlogDetail />} />

      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
      <Route path="/ai" element={<AI />} />

      {/* Workspace route uses location state, no URL param needed */}
      <Route path="/workspace" element={<Workspace />} />

      {/* Registration removed */}

      <Route path="*" element={<Pagenotfound />} />

    </Routes>
  )
}

export default Mainroutes