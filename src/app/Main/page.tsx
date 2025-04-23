import React from 'react';
import Image from 'next/image';
import Header from '../Header/page';

const Main = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      
      <section className='relative lg:sm:flex pb-8 lg:gap-16 lg:flex-row-reverse sm:flex-col bg-[#f6f7f9]  lg:sm:min-h-screen lg:sm:items-center lg:sm:justify-center'>

      <div className='main-img flex  items-center justify-center h-[400px] lg:h-[500px]  lg:rounded-[8px] rounded-[50%] w-full lg:mt-0  mt-8 lg:w-[400px]  object-cover'>
        <Image className=' shadow-md lg:shadow-md  shadow-[#7f7b7b] lg:h-[500px] lg:w-[500px] h-[300px] w-[300px]   lg:rounded-[8px] rounded-[50%]  ' src={'/car2.avif'} height={300} width={300} alt='my pic' />
      </div>

            <div className="lg:w-auto w-full px-4 lg:pt-0   relative    lg:px-0 pt-8 pb-12 lg:pb-0 lg:ml-0  lg:text-left text-center sm:lg:flex tracking-wide sm:lg:flex-col sm:items-center lg:items-start sm:lg:justify-center">
              <div className='text-[.8rem] font-[500] text-[#7f7b7b] mb-4'>WELCOME TO MY PORTFOLIO</div>
              <div className="lg:text-[3.2rem] text-[1.5rem] md:text-[2.3rem] font-extrabold text-gray-700 leading-snug"><span className='text-[#ea1b48]'>Hi,</span > I&apos;m <span className='text-gray-700' >Syed Farooq Ali</span></div>
              <div className="text-animation text-gray-700 w-full lg:text-[2.8rem]  text-[1.5rem]"> a <p className=' lg:text-[2.6rem] text-[1.4rem]'></p></div>
              <div className="lg:text-left lg:w-[450px] lg:mb-20 lg:pb-20  pb-20 text-base text-[.9rem] lg:text-[1rem] lg:pt-[1.5rem] pt-[1.5rem] lg:sm:tracking-wide font-[550] lg:sm:leading-7 text-gray-600  lg:pl-0">
                A Passionate Student Of | Full Stack Developer | Web 3.0 | Gen AI &amp; Metaverse | From Karachi, Pakistan.
              </div>
              <div className="social1 absolute w-[90%] md:w-[96%] lg:w-[90%]  lg:justify-between bottom-0 sm:flex-row lg:flex-row  space-y-0  justify-between lg:space-y-0 gap-4  flex items-center lg:mr-0 mr-0 sm:lg:flex items-ceter   sm:pt-4">
                <div className='social0'>
                  <p className='text-[.8rem] font-[500]  mr-2 text-[#373636] '>FIND WITH ME</p>
                <a className='h-[40px] bg-white  w-[40px]  flex items-center justify-center' href="#"><i className=" text-[#ea1b48] bx bxl-instagram "></i></a>
                
                <a href="#"><i className=" bx bxl-github"></i></a>
              
                <a href="#"><i className="  bx bxl-linkedin"></i></a>
                </div>
                <div className='social2' >
                  <p className='text-[.8rem] font-[500] lg:ml-[17px] ml-6 text-[#373636] '>BEST SKILL ON</p>
                  <div>
                <a href="#"><i className="fa-brands fa-css3-alt"></i></a>
                <a href="#"><i className="fa-brands fa-figma"></i></a>
                <a href="#"><i className="fa-brands fa-react"></i></a>
                </div>
                </div>
              </div>
              
            </div>
         
          
      </section>
    </div>
  );
};

export default Main;
