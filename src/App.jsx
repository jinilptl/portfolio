import { useState,useEffect } from 'react'
import './App.css'
import HomePage from './pages/home'
import AboutPage from './pages/aboutpage'
import Educationpage from "./pages/edu"
import Projectpage from './pages/Projectpage'
import Skillpage from './pages/skillpage'
import Experiencepage from './pages/experiencepage'
import Achivementpage from './pages/achivementpage'
import Contectpage from './pages/contactpage'

import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  
  useEffect(() => {
    AOS.init();
}, []);

  return (
    <div className='contaiiner overflow-hidden'>
     <HomePage></HomePage>
     <AboutPage></AboutPage>
     <Educationpage></Educationpage>
     <Projectpage></Projectpage>
     <Skillpage></Skillpage>
     <Experiencepage></Experiencepage>
     <Achivementpage></Achivementpage>
     <Contectpage></Contectpage>
    
    </div>
  )
}

export default App
