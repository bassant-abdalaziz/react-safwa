import React from 'react'
import './style.css';

import headerImg from '../../assets/student.png'

import Navbar from '../Navbar/Navbar';
import { Link } from 'react-scroll';
const Header= ()=> {
  return (
    <div className="home">
    <div className="container">
      <Navbar/>
      <div className='content'>
          <div className="home-information">
              <h1>تعلم بأكاديمية الصفوة بالمملكة</h1>
              <p>منصة توفر معلمين و معلمات في بيتكم و اونلاين</p>
              <Link  to="contact" spy={true} smooth={true} className="link">تواصل معنا</Link>
          </div>

          <div className='image'>
            <img src={headerImg} alt="home" />
          </div>
        </div> 
    </div>
</div>
  )
}

export default Header