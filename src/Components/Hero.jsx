import React from 'react';

import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
export const Hero = () => {
  return (
    <section id="Hero" className="flex justify-center bg-white text-black  gap-x-80">
      
      <div className='pt-20'>
        <p>welcome to my world</p>
        <p className='text-6xl  bold'>Hi, I'm <span className='text-yellow-600 text-7xl font-bold'>Mobeen Shahid</span></p>
        <p className='text-1xl  italic text-gray-600 typewriter'>I Craft Clean & Interactive Web Experiences   Let's Build Something Amazing Together</p>

      <div>
        <p className='pt-10 text-gray-600 text-base'>I’m a passionate MERN stack developer who loves building clean and modern web applications. <br/>
Software engineering has improved my problem-solving skills and technical thinking. <br/>
I enjoy learning new tools, creating projects, and turning ideas into real products. <br/>
My goal is to build fast, reliable, and user-friendly digital experiences. <br/></p>



<p className="text-white mt-20"><strong>Email:</strong> mianmobeen13200@gmail.com</p>
  <p className="text-white mb-20"><strong>Phone:</strong> 0341-4809132</p>

      </div>
      
        <div className="flex gap-8 text-4xl text-gray`-900  ">
  <a href="https://www.facebook.com/" className="border-2 rounded-sm hover:text-blue-500 hover:scale-110 duration-150">
    <FaFacebook />
  </a>

  <a href="https://www.whatsapp.com/" className=" border-2 rounded-sm hover:text-green-500 hover:scale-110 duration-150">
    <FaWhatsapp />
  </a>

  <a href="https://www.instagram.com/" className="border-2 rounded-sm hover:text-pink-500 hover:scale-110 duration-150 ">
    <FaInstagram />
  </a>
</div>

      

      </div>
      <div className='p-0 m-0 shadow-2xl rounded-full overflow-hidden animate-pulse bg-gray-50 ' >

        <img src="Pic.jpg" alt="mypic"
          className="w-120 min-h-full object-cover  pt-10  " />
      </div>



    </section>
    
  )
}
