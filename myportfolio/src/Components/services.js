import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaPaintBrush } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="services-container bg-[#d9e0ee] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="service-item p-6 bg-white rounded-lg shadow-md text-center">
          <FaLaptopCode className="text-4xl mb-4 mx-auto text-blue-500" />
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-700">Building responsive and dynamic websites using React, HTML, CSS, and JavaScript.</p>
        </div>
        <div className="service-item p-6 bg-white rounded-lg shadow-md text-center">
          <FaMobileAlt className="text-4xl mb-4 mx-auto text-blue-500" />
          <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
          <p className="text-gray-700">Creating user-friendly mobile applications for Android and iOS using React Native.</p>
        </div>
        <div className="service-item p-6 bg-white rounded-lg shadow-md text-center">
          <FaDatabase className="text-4xl mb-4 mx-auto text-blue-500" />
          <h3 className="text-xl font-bold mb-2">Backend Development</h3>
          <p className="text-gray-700">Developing robust server-side logic using Python (Flask), Node.js, and PostgreSQL.</p>
        </div>
        <div className="service-item p-6 bg-white rounded-lg shadow-md text-center">
          <FaPaintBrush className="text-4xl mb-4 mx-auto text-blue-500" />
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-gray-700">Designing intuitive and aesthetically pleasing user interfaces and experiences.</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-700 mb-4">Interested in my services? Let's work together to create something amazing!</p>
        <a href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Contact Me</a>
      </div>
    </div>
  )
}

export default Services