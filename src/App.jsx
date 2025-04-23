import React from 'react'
import {Route,Routes} from 'react-router-dom';
import About from './pages/About.jsx';
import Project from './pages/Projects.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx'
import Upnavbars from './navbars/Upnavbars.jsx';
import Web from './pages/Web.jsx'
import Graphic from './pages/Graphic.jsx'


const App = () => {
  return (
 <>
 <Upnavbars/>
<Routes>
  <Route path='/about' element={<About/>}/>
  <Route path='/project' element={<Project/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/graphic' element={<Graphic/>}/>
  <Route path='/web' element={<Web/>}/>
  <Route path='/about/graphic' element={<Graphic/>}/>
</Routes>
</>
  )
}

export default App
