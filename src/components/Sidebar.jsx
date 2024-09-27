// src/Sidebar.js
import { FaGoogle, FaOrcid, FaGithub, FaTwitter } from 'react-icons/fa'
import { MdLocationOn, MdEmail, MdSchool } from 'react-icons/md'
import { SiPubmed } from 'react-icons/si'

const Sidebar = () => {
  return (
    <div className='h-full w-full p-12'>
      {/* Profile Image */}
      <div className='flex flex-col items-center'>
        <img
          className='mb-4 h-32 w-32 rounded-full'
          src='https://placehold.co/150'
          alt='Profile'
        />
        <h2 className='text-green text-2xl font-bold'>Nikola Tesla</h2>
        <p className='mt-2 text-center'>
          Inventor, electrical engineer, mechanical engineer, and futurist, best
          known for his contributions to the development of alternating current
          (AC) electrical systems.
        </p>
      </div>

      {/* Contact and Links */}
      <div className='mt-8 space-y-6'>
        <div className='text-dark-grey flex items-center space-x-3'>
          <MdLocationOn className='text-green text-2xl' />
          <span>New York, NY, USA</span>
        </div>
        <div className='text-dark-grey flex items-center space-x-3'>
          <MdSchool className='text-green text-2xl' />
          <span>Graz University of Technology</span>
        </div>
        <div className='text-dark-grey flex items-center space-x-3'>
          <MdEmail className='text-green text-2xl' />
          <a href='mailto:nikola.tesla@example.com' className='hover:underline'>
            nikola.tesla@example.com
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className='mt-10'>
        <h3 className='mb-4 text-lg font-semibold text-gray-800'>Find Me On</h3>
        <div className='grid grid-cols-2 gap-4'>
          <a
            href='https://scholar.google.com'
            className='green flex items-center justify-center rounded-lg p-4 text-white shadow-sm'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGoogle className='text-2xl' />
          </a>
          <a
            href='https://orcid.org'
            className='green flex items-center justify-center rounded-lg p-4 text-white shadow-sm'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaOrcid className='text-2xl' />
          </a>
          <a
            href='https://pubmed.ncbi.nlm.nih.gov/'
            className='green flex items-center justify-center rounded-lg p-4 text-white shadow-sm'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiPubmed className='text-2xl' />
          </a>
          <a
            href='https://github.com'
            className='green flex items-center justify-center rounded-lg p-4 text-white shadow-sm'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='text-2xl' />
          </a>
          <a
            href='https://twitter.com/nikolatesla'
            className='green flex items-center justify-center rounded-lg p-4 text-white shadow-sm'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter className='text-2xl' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
