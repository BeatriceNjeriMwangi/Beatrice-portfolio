import React from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Contact = () => {
  return (
    <div className="contact-container bg-[#d9e0ee] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      
      <div className="contact-info">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="text-gray-700 mb-4">Email: <a href="mailto:your-email@example.com" className="text-blue-500">bbeatricemwangi@gmail.com</a></p>
        <p className="text-gray-700 mb-4">Phone: +(254) 792741378</p>
        <p className="text-gray-700 mb-4">Location: Nairobi, Kenya</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/beatrice-mwangi-2b7930212/" className="text-blue-500 mr-4">LinkedIn</a>
          <a href="https://github.com/BeatriceNjeriMwangi" className="text-blue-500 mr-4">GitHub</a>
          
        </div>
      </div>
    </div>
  )
}

export default Contact