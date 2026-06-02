
import { Route, Routes } from 'react-router-dom'
import Hero from '../components/Hero'
import Firstpage from '../pages/Firstpage'
import Blogs from '../pages/Blogs' 
import BlogDetail from '../pages/BlogDetail'
import About from '../pages/About'
import AI from '../pages/AI'
import Pagenotfound from '../pages/Pagenotfound'
import Workspace from '../pages/ProjectWorkspace'
import Privacy from '../pages/Privacy'
import Terms from '../pages/Terms'
import Contact from '../pages/Contact'

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

      {/* Gallery route removed */}
      <Route path="/about" element={<About />} />
      <Route path="/ai" element={<AI />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />

      {/* Workspace route uses location state, no URL param needed */}
      <Route path="/workspace" element={<Workspace />} />

      {/* Registration removed */}

      <Route path="*" element={<Pagenotfound />} />

    </Routes>
  )
}

export default Mainroutes