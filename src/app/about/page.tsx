import React from 'react'
import Header from '../Header/page'
import Image from 'next/image'

const About = () => {
  return (
    <div className='lg:sm:flex lg:mt-0 mt-8  lg:gap-0 lg:flex-row sm:flex-col bg-[#ffffff] lg:sm:min-h-screen items-center justify-center'>
      
      {/* about page */}
 <div className='main-img flex  items-center justify-center  lg:h-[450px] h-[300px] rounded-[8px]  lg:rounded-[8px]      lg:w-[450px]  w-full   object-cover'>
        <Image className=' shadow-md lg:shadow-none  shadow-[#7f7b7b] lg:h-[446px] h-[200px] w-[200px]  rounded-[8px] lg:rounded-[8px]    lg:w-[446px]' src={'/car2.avif'} height={300} width={300} alt='my pic' />
      </div>
 

      <div className="lg:max-w-[550px] sm:w-full px-4 mt-12  relative    lg:px-8 text-center lg:text-left    sm:lg:flex tracking-wide sm:lg:flex-col sm:items-center lg:items-start sm:lg:justify-center">

  <div className='text-[.8rem] font-[500] text-[#7f7b7b] mb-4'>LET ME INTRODUCE MYSELF</div>
  <div className='text-[1.5rem] font-[700] text-[#ea1b48] tracking-wide'>Who I Am<span className='text-[#ea1b48]'>?</span></div>
 <div className='mb-12 mt-2'><p className='text-[.98rem] text-gray-600'> Hi, I&apos;m <a className='text-[#ea1b48]'>Syed Farooq Ali</a>!, and I am a passionate tech enthusiast currently pursuing a Bachelor's degree in Computer Science <span  className='text-[#ea1b48]'>(</span>BSCS<span className='text-[#ea1b48]'>)</span>.
<br />
<br />
Alongside my academic journey, I am a proud student of Gen AI, Web 3.0, and Metaverse.
I am also honing my skills as a Full Stack Developer, continuously learning and improving to build innovative and efficient solutions.
</p>
 </div>
 <div><button className='about-button px-5 mb-2 py-3 bg-[#ea1b48] rounded-[4px] text-[.80rem]  font-[700]'>DOWNLOAD PDF</button></div>
 </div>




    </div>
  )
}

export default About