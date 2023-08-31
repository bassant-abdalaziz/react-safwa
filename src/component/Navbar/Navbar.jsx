import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './style.css';

import logoImg from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Whatsapp from '../WhatsApp/Whatsapp';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <div className='nav'>
        <div className='logo'>
          <img src={logoImg} alt="logo" />
          <h2>الصفوة</h2>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" style={{color:'rgb(46, 46, 46)'}}>الرئيسية</Link></li>
          <li><Link to="about" spy={true} smooth={true}>من نحن</Link></li>
          <li><Link to="services" spy={true} smooth={true}>الخدمات</Link></li>
          <li><Link to="contact" spy={true} smooth={true}>تواصل معنا</Link></li>
          <li>
            <Whatsapp background="rgb(4, 224, 74)">
                  <a target='-blank' href="https://wa.me/+966559287026">
                  <FontAwesomeIcon icon={faWhatsapp} className='fa'/>
                  بدأ المحادثة</a>
            </Whatsapp>
          </li>
        </ul>

        <div className='hamburger' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className='fa'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
