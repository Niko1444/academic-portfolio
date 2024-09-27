// src/components/Projects.jsx
import projectsData from '../data/ProjectsData.json'

const Projects = () => {
  return (
    <section
      id='projects'
      className='rounded-2xl border-4 border-dashed border-[#33504f] bg-white p-8 py-12'
    >
      <div className='container mx-auto px-6 lg:px-8'>
        <h2 className='text-green mb-8 text-center text-3xl font-extrabold'>
          Projects
        </h2>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='rounded-lg border border-[#33504f] bg-white p-6 shadow-[#33504f] transition-shadow duration-300 hover:shadow-xl'
            >
              <h3 className='mb-2 text-xl font-semibold text-gray-800'>
                {project.title}
              </h3>
              <p className='mb-4 text-gray-600'>{project.description}</p>
              <a
                href={project.link}
                className='font-medium text-blue-400 hover:text-indigo-600'
                target='_blank'
                rel='noopener noreferrer'
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
