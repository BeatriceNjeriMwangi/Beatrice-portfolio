import React from 'react'

const Projects = () => {
  return (
    <div>
      <ul>
        <li>Phase 1:</li>
      </ul>
      <section className="mt-8">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="mt-4">
          Check out some of my recent projects:
        </p>
        <ul className="mt-2 list-disc list-inside">
          <li><a href="#project1" className="text-blue-500">Project 1</a></li>
          <li><a href="#project2" className="text-blue-500">Project 2</a></li>
          <li><a href="#project3" className="text-blue-500">Project 3</a></li>
        </ul>
      </section>
    </div>
  )
}

export default Projects