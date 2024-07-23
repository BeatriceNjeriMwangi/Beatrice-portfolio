import React from 'react';

const Resume = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg">
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold">Beatrice Njeri</h1>
        <h2 className="text-xl text-gray-600">Software Engineer</h2>
      </header>
      <section className="mb-4">
        <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">About Me</h3>
        <p className="text-gray-700 text-sm">
          Highly skilled and motivated Software Engineering student versed in reviewing plans, writing reports, researching solutions, and implementing company procedures. Willingness to learn, follow instructions, and work cooperatively within team environments. Computer competencies: MS Office applications and experience in full-stack development, specializing in React and Python. Adept at designing and implementing scalable, high-performance applications and solutions. Proficient in cloud services, version control, and modern development tools. Strong problem-solving abilities with a passion for continuous learning and innovation.
        </p>
      </section>
      <section className="mb-4">
        <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">Experience</h3>
        <h4 className="text-lg font-medium mb-2">IT Intern, Maitos Company (2022-2023)</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Assisted in troubleshooting hardware and software issues.</li>
          <li>Performed routine maintenance tasks and supported network administration.</li>
          <li>Maintained accurate records and provided basic training to staff.</li>
          <li>Developed and managed the company's email system.</li>
          <li>Stayed updated with industry trends and contributed ideas for IT process improvements.</li>
        </ul>
      </section>
      <section className="mb-4">
        <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">Education</h3>
        <h4 className="text-lg font-medium mb-2">Africa Nazarene University (2018-2023)</h4>
        <p className="text-gray-700 text-sm">Bachelor's Degree in Business Information Technology (BBIT)</p>
        <h4 className="text-lg font-medium mt-4 mb-2">Moringa School (2023-2024)</h4>
        <p className="text-gray-700 text-sm">Software Engineering Certificate, gained hands-on skills in full-stack development.</p>
      </section>
      <section className="mb-4">
        <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">Skills</h3>
        <h4 className="text-lg font-medium mb-2">Languages & Frameworks:</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Python</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>React</li>
          <li>Flask (Python)</li>
          <li>Django (Python)</li>
        </ul>
        <h4 className="text-lg font-medium mt-4 mb-2">Expertise:</h4>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Front-end Development (UI/UX)</li>
          <li>Back-end Development (Server Side)</li>
          <li>API Development</li>
          <li>Database Management</li>
          <li>Version Control: Git and GitHub</li>
          <li>Good communication & teamwork</li>
          <li>Continual learning & staying updated with current trends</li>
        </ul>
      </section>
      <section className="mb-4">
        <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">References</h3>
        <p className="text-gray-700 text-sm">Dennis Kiboi, Moringa School</p>
        <p className="text-gray-700 text-sm">Phone: +(254) 721996991</p>
      </section>
      <section className="mb-4">
        <h3 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">Contact Information</h3>
        <p className="text-gray-700 text-sm">Email: bbeatricemwangi@gmail.com</p>
        <p className="text-gray-700 text-sm">Phone: +(254) 792741378</p>
        <p className="text-gray-700 text-sm">
          LinkedIn: <a href="https://linkedin.com/in/beatrice-mwangi-2b7930212/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Beatrice Mwangi LinkedIn</a>
        </p>
        <p className="text-gray-700 text-sm">
          GitHub: <a href="https://github.com/BeatriceNjeriMwangi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Beatrice Njeri GitHub</a>
        </p>
      </section>
    </div>
  );
};

export default Resume;
