

import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Project from "./components/Project"
import Skills from "./components/Skills"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<><About /></>} />
          <Route path="/skills" element={<><Skills/></>} />
          <Route path="/project" element={<><Project /></>} />
          <Route path='/contact'element={<><Contact /></>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
