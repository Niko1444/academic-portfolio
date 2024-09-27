import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='grey border-b border-gray-300 py-4'>
      <div className='container mx-auto flex items-center justify-between px-4'>
        {/* Site Title */}
        <div className='text-green text-3xl font-black'>Hello World!</div>
        {/* Navigation Links */}
        <nav className='flex space-x-8'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'text-green rounded-xl bg-[#DBDDDA] p-3 font-bold'
                : 'p-3 text-gray-500 hover:text-gray-700'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/cv'
            className={({ isActive }) =>
              isActive
                ? 'text-green rounded-xl bg-[#DBDDDA] p-3 font-bold'
                : 'p-3 text-gray-500 hover:text-gray-700'
            }
          >
            CV
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive
                ? 'text-green rounded-xl bg-[#DBDDDA] p-3 font-bold'
                : 'p-3 text-gray-500 hover:text-gray-700'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to='/publications'
            className={({ isActive }) =>
              isActive
                ? 'text-green rounded-xl bg-[#DBDDDA] p-3 font-bold'
                : 'p-3 text-gray-500 hover:text-gray-700'
            }
          >
            Publications
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
