const CurriculumVitae = () => {
  return (
    <div className='rounded-2xl border-4 border-dashed border-[#33504f] bg-white p-8 py-12'>
      <div className='container mx-auto px-6 lg:px-8'>
        <h1 className='mb-12 text-center text-4xl font-extrabold text-[#33504f]'>
          Curriculum Vitae
        </h1>

        <section className='mb-8'>
          <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
            Personal Information
          </h2>
          <div className='space-y-2 text-gray-700'>
            <p>
              <strong>Name:</strong> Nikola Tesla
            </p>
            <p>
              <strong>Email:</strong> nikola.tesla@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1234567890
            </p>
            <p>
              <strong>Address:</strong> 1234 Electric Ave, New York, NY
            </p>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
            Education
          </h2>
          <ul className='space-y-4 text-gray-700'>
            <li>
              <strong>Ph.D. in Electrical Engineering</strong>
              <br />
              University of Graz, 1875 - 1878
            </li>
            <li>
              <strong>B.Sc. in Electrical Engineering</strong>
              <br />
              Austrian Polytechnic, 1873 - 1875
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
            Professional Experience
          </h2>
          <ul className='space-y-4 text-gray-700'>
            <li>
              <strong>Inventor and Electrical Engineer</strong>
              <br />
              Tesla Electric Company, 1887 - 1943
            </li>
            <li>
              <strong>Assistant Engineer</strong>
              <br />
              Edison Machine Works, 1884 - 1885
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='mb-4 text-2xl font-semibold text-gray-800'>
            Publications
          </h2>
          <ul className='space-y-4 text-gray-700'>
            <li>
              <strong>
                The Inventions, Researches and Writings of Nikola Tesla
              </strong>
              <br />
              1894
            </li>
            <li>
              <strong>My Inventions: The Autobiography of Nikola Tesla</strong>
              <br />
              1919
            </li>
          </ul>
        </section>

        <section className='mb-8'>
          <h2 className='mb-4 text-2xl font-semibold text-gray-800'>Skills</h2>
          <ul className='space-y-2 text-gray-700'>
            <li>Electrical Engineering</li>
            <li>Inventing</li>
            <li>Research</li>
            <li>Problem Solving</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default CurriculumVitae
