function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Made By:
        <a className='text-white' href='https://github.com/sardar112'>
          Muhammad Saqib Raheem
        </a>
      </p>
      <p className='text-lg text-gray-400'>
        Designation: <b className='text-lg text-500'>Software Engineer</b>
        <p>
          I'm MEAN/MERN Stack developer. I've 1.5 years of experience in
          developing both frontend and backend applications.
        </p>
      </p>
    </>
  );
}

export default About;
