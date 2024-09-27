const Footer = () => {
  return (
    <footer className='green py-8 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          {/* Personal Information */}
          <div className='mb-4 md:mb-0'>
            <h2 className='text-xl font-semibold'>Nikola Tesla</h2>
            <p className='text-gray-50'>Inventor and Electrical Engineer</p>
            <p className='text-gray-50'>New York, NY, USA</p>
          </div>
          {/* Links */}
          <div className='flex space-x-6'>
            <a
              href='https://www.linkedin.com/in/nikolatesla'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-50 hover:text-white'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com/nikolatesla'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-50 hover:text-white'
            >
              GitHub
            </a>
            <a
              href='https://scholar.google.com/citations?user=nikolatesla'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-50 hover:text-white'
            >
              Google Scholar
            </a>
            <a
              href='mailto:nikola.tesla@example.com'
              className='text-gray-50 hover:text-white'
            >
              Email
            </a>
          </div>
        </div>
        {/* Bottom Line */}
        <div className='mt-6 border-t border-gray-50 pt-4 text-center text-gray-100'>
          <p>
            &copy; {new Date().getFullYear()} Nikola Tesla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
