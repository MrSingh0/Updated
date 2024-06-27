import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './style.css';

const Navbar = () => {
  return (
    <nav className='Navbar py-2 nav w-full text-center flex flex-row justify-around'>
      <h1 className='logo w-1/4 flex justify-start text-4xl'>FOBHA</h1>
      <ul className='nav flex flex-row justify-between text-right w-2/4 text-xl font-medium'>
        <li className = "pages"><Link to="/"><p>HOME</p></Link></li>
        <li className = "pages"><Link to="/aboutus"><p>ABOUT US</p></Link></li>
        <li className = "pages"><Link to="/products"><p>PRODUCTS</p></Link></li>
        <li className = "pages"><Link to="/dealership"><p>DEALERSHIP INQUIRY</p></Link></li>
        <li className = "pages"><Link to="/feedback"><p>FEEDBACK</p></Link></li>
        <li className = "pages"><Link to="/contactus"><p>CONTACT US</p></Link></li>
      </ul>

      <div className='menu-button'>
        <Sidebar/>
      </div>
    </nav>
  );
};

export default Navbar;
