// src/components/Navbar.js
import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav]=useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="bg-gray-800 p-4">
      <h1 className=' flex text-white px-3 py-2 rounded-md'>BEATRICE NJERI MWANGI</h1>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
        </li>
        <li>
          <Link to="/projects" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
        </li>
        <li>
          <Link to="/resume" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Resume</Link>
        </li>
        <li>
          <Link to="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
        </li>
        <li>
          <Link to="/skills" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Skills</Link>
        </li>
      </ul>
      <div onClick={handleClick} ></div>
      
          {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
      
      
    </nav>
  );
};

export default Navbar;
