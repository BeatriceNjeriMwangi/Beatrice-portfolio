import React from 'react'

const About = () => {
  return (
    // 
    <div className="about-me-container bg-[#d9e0ee] p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        Hello! My name is Beatrice Njeri Mwangi, and I am a passionate Software Engineer from Nairobi, Kenya. With a strong background in dynamic web development projects, app development, and problem-solving, I strive to create innovative solutions that make a difference.
      </p>
      <p className="mb-4">
        I hold a degree in Computer Science from Africa Nazarene University and have accumulated experience working on various projects. My expertise includes front-end technologies like React and back-end technologies like Python (Flask), along with database management using PostgreSQL. I am also proficient in UI/UX design, ensuring that the applications I build are both functional and aesthetically pleasing.
      </p>
      <p className="mb-4">
        My technical skills include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>React, Redux</li>
        <li>Python, Flask</li>
        <li>PostgreSQL</li>
        <li>Docker, Kubernetes</li>
        <li>Git, GitHub, CI/CD</li>
        <li>UI/UX Design</li>
      </ul>
      <p className="mb-4">
        I am a creative problem-solver with a keen eye for detail. I enjoy working in collaborative environments and believe in continuous learning and improvement. I am also passionate about mentoring and helping others grow in their careers.
      </p>
      <p className="mb-4">
        Outside of work, I enjoy exploring new technologies, contributing to open-source projects, and participating in hackathons. I am also an avid reader and enjoy hiking.
      </p>
      <p className="mb-4">
        My career goal is to leverage my skills and experience to build impactful software solutions that improve lives. I am always looking for new challenges and opportunities to grow.
      </p>
      <p>
        Feel free to <a href="/contact" className="text-blue-500">contact me</a> if you'd like to collaborate or learn more about my work.
      </p>
    </div>
  )
}

export default About
