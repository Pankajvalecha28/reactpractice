import React from 'react'
import Navbar from '../Components/Navbar'
import Aboutme from '../Components/Aboutme'
import ContactMe from '../Components/ContactMe'
import Experience from '../Components/Experience'
import Expertise from '../Components/Expertise'
import Projects from '../Components/Projects'

const HomePage = () => {
  return (
    <div className='App'>
        {/* <header className='App-header'> */}
      <Navbar/>
      {/* </header> */}
      <main>
        <Aboutme/>
        <Projects/>
        <Experience/>
        <Expertise/>
        </main>

        <ContactMe/>
    </div>
  )
}

export default HomePage
