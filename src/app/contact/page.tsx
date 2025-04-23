import React from "react";
import Header from "../Header/page";
import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa"; // Icons Import

const Contact = () => {
  return (
    <div>
      
      {/* Contact Page */}

      <section className="contact pt-4" id="contact">
        {/* Have Questions Heading */}
        <h3 className='text-gray-700 text-[1.1rem] font-[600] text-center  relative '>Hav<span className=' border-b-2 border-[rgb(234,27,72)] pb-3'><span className="text-[#ea1b48]"></span>e Quest</span>ion?</h3>
        {/* Contact Me Now Heading */}
        <h1 className="text-center  text-gray-600 text-[1.2rem] font-semibold mt-8">
          Contact Me Now
        </h1>

        <form action="">
          <div className="flex mt-8 lg:mt-0 mx-2 lg:mx-0 items-center flex-col lg:flex-row sm:flex-col gap-4 justify-evenly">
            <div className="flex  space-y-4 flex-col justify-center">
              <div className="space-y-4">
                <input type="text" placeholder="Full Name..." />
                <input type="email" placeholder="Email.." />
              </div>
              <div className="space-y-4">
                <input type="number" placeholder="Phone Number.." />
                <input type="text" placeholder="Subject.." />
              </div>
            </div>

            <div className="flex flex-col mt-4 lg:mt-0 space-y-2 lg:items-start items-center">
              <textarea
                className="mb-4"
                cols={55}
                rows={10}
                placeholder="Your Message..."
              ></textarea>
              <div className="mt-8">
              <div><button className='about-button px-5 mb-2 py-3 bg-[#ea1b48] rounded-[4px] text-[.80rem]  font-[700]'>SEND MESSAGE</button></div>
              </div>
            </div>
          </div>
        </form>

        {/* Contact Info Section */}
        <div className="flex flex-wrap justify-center gap-32 mt-12 p-8 rounded-lg shadow-md">
          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-green-500 text-3xl" />
            <p className="text-gray-700 mt-2 font-medium">+92 300 2402289</p>
            <p className="text-gray-700 font-medium mt-2">+92 300 2402289</p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-red-500 text-3xl" />
            <p className="text-gray-700 mt-2 font-medium">123 Street, karachi, Pakistan</p>
            <p className="text-gray-700 mt-2 font-medium">123 Street, karachi, Pakistan</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-blue-500 text-3xl" />
            <p className="text-gray-700 mt-2 font-medium">syedfarooqali15@gmail.com</p>
            <p className="text-gray-700 mt-2 font-medium">syedfarooqali15@gmail.com</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;