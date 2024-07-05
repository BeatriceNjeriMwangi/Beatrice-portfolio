import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../Assets/image1.png'
const Home = () => {
  return (
    <div className='h-screen w-full bg-[#d9e0ee] p-8'>
      <div className="text-center">
        <h4 className="text-3xl sm:text-5xl font-bold text-black">Welcome to My Portfolio.</h4>
        <p className="mt-4">
          Hi, I'm Beatrice Njeri, a full stack developer. I have 3-4 years of experience in programming and development. I have pursued a Bachelor in Business Information Technology (BBIT) at Africa Nazarene University and a software engineering course at Moringa School. I love to work on web applications using technologies like JavaScript, React, Tailwind, Python, and Flask. I also use MySQL and PostgreSQL.
        </p>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Link
          to="/about"
          className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
          About Me
        </Link>
      </div>
      <div>
        <img src={image1} alt='my profile' 
        />
      </div>

      
      
      
      
      </div>
  );
}

export default Home;
