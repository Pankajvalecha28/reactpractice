import React from 'react';
import navbarData from '../Data/NavbarData';
import '../Styles/NavBar.css';
import logo from '../Images/logo.png'



const Navbar = () => {
  return (
    <div>
    <nav>
    <div className="logo">
        <img src={logo} alt='Logo'/>
      </div>
      <ul>
        {navbarData.map((item) => (
           <li key={item.id}>  
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
