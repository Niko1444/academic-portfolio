import PropTypes from 'prop-types'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function Layout({ children }) {
  return (
    <div className='grey flex min-h-screen flex-col'>
      {/* Header Section */}
      <Header />

      {/* Main Content Area */}
      <div className='flex flex-1 flex-col lg:flex-row'>
        {/* Sidebar */}
        <aside className='w-full shadow-md lg:w-[26rem] lg:border-r'>
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className='flex-1 p-4 md:p-8'>
          <div className='mx-auto max-w-4xl'>{children}</div>
        </main>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
