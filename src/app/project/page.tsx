"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Project = () => {
  const [filter, setFilter] = useState('All'); // State to track the active filter

  // Project data
  const projects = [
    {
      id: 1,
      category: 'Apps',
      title: 'Resume Builder',
      description: 'Resume builder website using html,css and typescript...',
      image: '/projfirstimage.jpg',
      weblink:"https://resume-builder-5pbk.vercel.app"
    },
    {
      id: 2,
      category: 'Apps',
      title: 'E-Commerce Website',
      description: 'E-commerce website using tailwindcss and next.js...',
      image: '/finalproj2.jpg',
      weblink:""
    },
    {
      id: 3,
      category: 'Websites',
      title: 'Rental Cars Website',
      description: ' Rental cars website using tailwindcss and next.js...',
      image: '/final3project.avif',
      weblink:"https://marketplace-car-rental-app-by-syedfarooqali.vercel.app/"
    },
    {
      id: 4,
      category: 'Apps',
      title: 'Food Restraunt Website',
      description: 'Food restraunt website using tailwindcss and next.js...',
      image: '/lastprj4.png',
      weblink:""
    },
    {
      id: 5,
      category: 'Websites',
      title: 'Personal Portfolio Website',
      description: 'Personal portfolio website using tailwindcss and next.js...',
      image: '/proj4final.webp',
      weblink:""
    },
    {
      id: 6,
      category: 'Websites',
      title: 'Blog Website',
      description: 'Dynamic blog website using tailwindcss and next.js...',
      image: '/last6proj.png',
      weblink:"https://blog-website-with-sanity-syed-farooq.vercel.app"
    },
  ];

  // Filter the projects based on the selected category
  const filteredProjects =
    filter === 'All' ? projects : projects.filter((project) => project.category === filter);

  return (
    <div>
      
      {/* Project Section */}
      <section id="project-sec" className="pb-12 pt-24 lg:pt-0 mx-0 lg:mx-20">
        <div className="pro-sec mx-8 ">
        <h3 className='text-gray-700 text-[1.1rem] font-[600]  relative '>My<span className=' border-b-2 border-[rgb(234,27,72)] pb-3'><span className="text-[#ea1b48]"></span> Portfo</span>lio</h3>
       <h3 className="lg:text-[1.2rem]  text-[.9rem] font-[550] text-gray-600 tracking-wide"> What I Will Do For You</h3>

        </div>
        <div className="flex lg:flex-row flex-col  lg:ml-0 space-y-2 lg:space-y-0 items-center lg:items-center lg:mx-2 mx-0 mt-8 lg:mt-8 lg:pb-0 pb-4 justify-center">
        <h2 className=" text-[1.8rem] tracking-wide text-gray-800 font-[700]"></h2>
          {/* Filter Buttons */}
          <ul className="flex gap-16 ">
            <li
              className={`cursor-pointer ${filter === 'All' ? 'text-[#ea1b48]  border-b-2 border-[#ea1b48]' : 'text-gray-800  active:border-b-2 active:border-[#f6f7f9]'}`}
              onClick={() => setFilter('All')}
            >
              All
            </li>
            <li
              className={`cursor-pointer ${filter === 'Websites' ? 'text-[#ea1b48] border-b-2 border-[#ea1b48]' : 'text-gray-800 active:border-b-2 active:border-[#f6f7f9]'}`}
              onClick={() => setFilter('Websites')}
            >
              Websites
            </li>
            <li
              className={`cursor-pointer ${filter === 'Apps' ? 'text-[#ea1b48]  border-b-2 border-[#ea1b48]' : 'text-gray-800 active:border-b-2 active:border-[#f6f7f9]'}`}
              onClick={() => setFilter('Apps')}
            >
              Apps
            </li>
          </ul>
        </div>

        {/* Project Cards */}
        <div className="flex space-y-0 gap-8  mt-12 items-center flex-wrap justify-evenly w-full">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="box1 bg-[#FFFFFF] rounded-[4px] hover:border-[#ea1b48] border-[2px] shadow-xl  lg:h-[330px] h-[330px] lg:w-[320px] w-[300px] cursor-pointer flex flex-col  items-center justify-center"
            >
              <div className="port-img  object-contain">
                <Image
                  className="rounded-[4px]"
                  height={200}
                  width={200}
                  src={project.image}
                  alt={project.title}
                />
              <a href={project.weblink} className='port-cont text-[1.8rem] '>
                  <i className="bx bx-link-external text-white"></i>
                </a>
              </div>
              <div className="mx-4 mb-2 text-black rounded-[8px]">
                <h3 className="text-[1.1rem] font-[500]">{project.title}</h3>
                <p className='text-[.9rem]'>{project.description}</p>
                <a className='flex items-center gap-2 mt-1 text-[#ea1b48] text-[.9rem]' href={project.weblink}>Visit website <i className="bx bx-link-external text-[#ea1b48]"></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;