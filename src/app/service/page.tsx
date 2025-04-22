"use client";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-[#ea1b48] text-5xl" />,
    description: "I create high-performance, scalable, and user-friendly web applications with modern technologies.",
  },
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-[#ea1b48] text-5xl" />,
    description: "I craft pixel-perfect UI/UX with clean and reusable code using React & Next.js.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush className="text-[#ea1b48] text-5xl" />,
    description: "I design premium, modern interfaces that ensure a stunning user experience.",
  },
];

export default function Services() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center bg-[#EAF6FF] lg:p-20  p-10">
       <h3 className='text-gray-700 text-[1.1rem] font-[600]  relative '>Wh<span className=' border-b-2 border-[rgb(234,27,72)] pb-3'><span className="text-[#ea1b48]"></span>at I Of</span>fer</h3>
       <h3 className="lg:text-[1.2rem] mt-8 text-[.9rem] font-[550] text-gray-600"> Tailored Solutions to Meet Your Business Needs</h3>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#FFFFFF] shadow-xl rounded-lg p-6 flex flex-col items-center text-center space-y-4 hover:scale-105 transition-all duration-300"
          >
            {service.icon}
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}