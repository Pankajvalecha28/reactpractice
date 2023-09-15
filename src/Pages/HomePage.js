import React from 'react'
import Navbar from '../Components/Navbar'
import Aboutme from '../Components/Aboutme'
import ContactMe from '../Components/ContactMe'
import Experience from '../Components/Experience'
import Expertise from '../Components/Expertise'
import Projects from '../Components/Projects'
import navbarData from '../Data/NavbarData'; // Import the data
import logo from '../Images/logo.png'; // Import the logo


const HomePage = () => {
  return (
    <div className='App'>
        {/* <header className='App-header'> */}
        <Navbar navbarData={navbarData} logoSrc={logo} />
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
