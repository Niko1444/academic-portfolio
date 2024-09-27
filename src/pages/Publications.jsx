import publicationsData from '../data/PublicationsData.json'

const Publications = () => {
  return (
    <section
      id='publications'
      className='rounded-2xl border-4 border-dashed border-[#33504f] bg-white p-8 py-12'
    >
      <div className='container mx-auto px-6 lg:px-8'>
        <h2 className='text-green mb-8 text-center text-3xl font-extrabold'>
          Publications
        </h2>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {publicationsData.map((publication, index) => (
            <div
              key={index}
              className='rounded-lg border border-[#33504f] bg-white p-6 shadow-[#33504f] transition-shadow duration-300 hover:shadow-xl'
            >
              <h3 className='mb-2 text-xl font-semibold text-gray-800'>
                {publication.title}
              </h3>
              <p className='mb-4 text-gray-600'>{publication.description}</p>
              <a
                href={publication.link}
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

export default Publications
