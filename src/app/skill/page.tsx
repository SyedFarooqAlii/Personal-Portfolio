"use client";
import React, { useEffect, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact ,FaUsers, FaLightbulb, FaProjectDiagram, FaComments } from "react-icons/fa";
import {SiNextdotjs } from "react-icons/si"
import Header from "../Header/page";

const skills = [
  { name: "HTML", value: 90, icon: <FaHtml5 className="text-[#e34c26]" /> },
  { name: "CSS", value: 85, icon: <FaCss3Alt className="text-[#1572b6]" /> },
  { name: "JavaScript", value: 80, icon: <FaJs className="text-[#f7df1e]" /> },
  { name: "React.js", value: 85, icon: <FaReact className="text-[#61dbfb]" /> },
  { name: "Next.js", value: 85, icon: <SiNextdotjs className="text-[#808080]" /> },
];

const professionalSkills = [
  { name: "Team Work", value: 95, icon: <FaUsers className="text-[#ea1b48]" /> },
  { name: "Creativity", value: 92, icon: <FaLightbulb className="text-[#ffcc00]" /> },
  { name: "Management", value: 90, icon: <FaProjectDiagram className="text-[#ea1b48]" /> },
  { name: "Communication", value: 88, icon: <FaComments className="text-[#007bff]" /> },
];

const Skill = () => {
  const [animatedValues, setAnimatedValues] = useState({
    tech: skills.map(() => 0),
    prof: professionalSkills.map(() => 0),
  });

  useEffect(() => {
    skills.forEach((skill, index) => {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter >= skill.value) clearInterval(interval);
        setAnimatedValues((prev) => {
          const updated = [...prev.tech];
          updated[index] = counter;
          return { ...prev, tech: updated };
        });
        counter++;
      }, 15);
    });

    professionalSkills.forEach((skill, index) => {
      let counter = 0;
      const interval = setInterval(() => {
        if (counter >= skill.value) clearInterval(interval);
        setAnimatedValues((prev) => {
          const updated = [...prev.prof];
          updated[index] = counter;
          return { ...prev, prof: updated };
        });
        counter++;
      }, 15);
    });
  }, []);

  return (
    <div className="bg-[#f2f7fb] min-h-screen text-black">

      {/* Skill Section */}
      <section className="pt-28 lg:pt-0  pb-16 flex flex-col items-center">
        {/* Heading */}
        <div className="text-left lg:text-center sm:px-4 lg:px-8 w-full h-full  mb-10">
        <div className="pro-sec mx-8 ">
        <h3 className='text-gray-700 text-[1.1rem] font-[600]  relative '>My<span className=' border-b-2 border-[rgb(234,27,72)] pb-3'><span className="text-[#ea1b48]"></span> Expert</span>ise</h3>

          <h3 className="text-[.9rem] lg:text-[1.2rem] font-[550] text-gray-600"> Overview of My Professional and Technical Skills</h3>
        </div> 
        </div>
        {/* Skills Container */}
        <div className="lg:mt-8 flex flex-col lg:flex-row items-center justify-center gap-16 w-[90%] lg:w-[90%]">
          {/* Technical Skills */}
          <div className="w-full lg:w-[45%] bg-[#FFFFFF] p-8 rounded-xl shadow-2xl border border-gray-200 backdrop-blur-lg">
            <h2 className="text-[1.8rem] text-gray-700 font-bold text-center mb-6">
              <span className="text-[#ea1b48]">Technical</span> Skills
            </h2>

            {/* Skill Bars */}
            {skills.map((skill, index) => (
              <div key={index} className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2 text-lg font-medium">
                    {skill.icon} {skill.name}
                  </div>
                  <p className="text-[#ea1b48] font-semibold">{animatedValues.tech[index]}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#ea1b48] to-black h-2 rounded-full transition-all duration-500"
                    style={{ width: `${animatedValues.tech[index]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Skills */}
          <div className="w-full lg:w-[45%] bg-[#FFFFFF] p-8 rounded-xl shadow-2xl border border-gray-200 backdrop-blur-lg">
            <h2 className="text-[1.8rem] text-gray-700 font-bold text-center mb-6">
              <span className="text-[#ea1b48]">Professional</span> Skills
            </h2>

            {/* Circular Progress Indicators */}
            <div className="grid grid-cols-2 gap-10">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-[6,5rem] h-[6.5rem]">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#ddd" strokeWidth="10" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="url(#grad1)"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="251"
                        strokeDashoffset={(251 * (100 - animatedValues.prof[index])) / 100}
                        strokeLinecap="round"
                        className="transition-all duration-700"
                      />
                      <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: "#ea1b48", stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: "black", stopOpacity: 1 }} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                      {animatedValues.prof[index]}%
                    </div>
                  </div>
                  <p className="mt-2 text-center text-lg flex items-center gap-1">
                    {skill.icon} {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;