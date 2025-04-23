import React from 'react'
import Main from './Main/page'
import About from './about/page'
import Skill from './skill/page'
import Project from './project/page'
import Contact from './contact/page'
import Footer from './footer/footer'
import Services from './service/page'
import "./globals.css";

const Home = () => {
  return (
    <div className='bg-[#f6f7f9]'>
      <Main/>
      <Skill/>
      <About/>
      <Project/>
      <Services/>
      <Contact/>
      
    </div>
  )
}

export default Home