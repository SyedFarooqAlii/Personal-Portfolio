import React from 'react'
import Main from './Main/page'
import About from './about/page'
import Skill from './skill/page'
import Project from './project/page'
import Contact from './contact/page'
import Footer from './footer/footer'
import Services from './service/page'


const Home = () => {
  return (
    <div className='bg-[#EAF6FF]'>
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