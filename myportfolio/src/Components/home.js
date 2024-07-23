import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Assets/image1.png';

const Home = () => {
  return (
    <div className='h-screen w-full bg-[#d9e0ee] p-6'>
      <div className="text-center mb-6">
        <h4 className="text-2xl sm:text-4xl font-bold text-black">Welcome to My Portfolio.</h4>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mb-6">
        <div className="flex-shrink-0 w-48 h-48 bg-blue-500 text-white rounded-md flex flex-col justify-center items-center mb-4 md:mb-0 md:mr-6 overflow-hidden">
          <h1 className="text-sm font-bold mb-1 text-center">HELLO, MY NAME IS</h1>
          <h5 className="text-base font-semibold mb-1 text-center">BEATRICE NJERI MWANGI</h5>
          <p className="text-xs text-center">Software Engineer</p>
        </div>
        <p className="text-sm text-gray-700 text-center md:text-left">
          From Nairobi, Kenya. I have a strong background in dynamic web development projects, app development, problem-solving, and creating innovative solutions. I am also proficient in UI/UX design.
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <Link
          to="/about"
          className="group text-white w-fit px-4 py-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          About Me
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-6">
        <div className="flex-1 p-4">
          <p className="text-sm">
            As a versatile software engineer, I bring a comprehensive skill set that spans multiple programming languages and development frameworks. With a strong foundation in both front-end and back-end technologies, I excel in creating seamless, user-friendly applications. My expertise includes React for dynamic user interfaces, Python (Flask) for robust server-side logic, and PostgreSQL for reliable database management. Additionally, I am proficient in modern development tools such as Docker for containerization, Git for version control, and CI/CD pipelines for efficient deployment. My experience extends to cloud services and APIs, ensuring scalable and secure solutions. Dedicated to continuous learning and innovation, I am eager to contribute my technical acumen and problem-solving abilities to drive successful project outcomes.
          </p>
        </div>
        <div className="flex-shrink-0 w-48 h-64 ml-4 bg-gray-200 border-2 border-gray-300 rounded-md overflow-hidden">
          <img 
            src={image1} 
            alt='my profile' 
            className='w-full h-full object-cover' 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
