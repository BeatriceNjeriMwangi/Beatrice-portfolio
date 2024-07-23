import React from 'react';

const Skills = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg">
      <header className="text-center mb-4">
        <h1 className="text-3xl font-bold">Skills</h1>
      </header>
      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">Programming Languages</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Python</li>
          <li>JavaScript</li>
          <li>PHP</li>
        </ul>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">Frameworks & Libraries</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>React</li>
          <li>Flask (Python)</li>
          <li>Django (Python)</li>
        </ul>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">CSS Frameworks</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Tailwind CSS</li>
          <li>Bootstrap</li>
        </ul>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">Tools & Technologies</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Version Control: Git and GitHub</li>
          <li>Database Management: PostgreSQL, MySQL</li>
          <li>API Development</li>
          <li>Cloud Services</li>
          <li>MS Office Applications</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold border-b-2 border-gray-300 pb-1 mb-2">Soft Skills</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm">
          <li>Good Communication & Teamwork</li>
          <li>Problem-Solving Abilities</li>
          <li>Willingness to Learn</li>
          <li>Continuous Learning & Innovation</li>
          <li>Following Instructions</li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
