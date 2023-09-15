import React from 'react';
import '../Styles/NavBar.css';

const Navbar = (props) => {
  const { navbarData, logoSrc } = props;


  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logoSrc} alt='Logo'/>
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



export default Navbar;

