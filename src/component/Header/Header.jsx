import React from 'react'
import './style.css';

import headerImg from '../../assets/student.png'

import Navbar from '../Navbar/Navbar';
const Header= ()=> {
  return (
    <div className="home">
    <div className="container">
      <Navbar/>
      <div className='content'>
          <div className="home-information">
              <h1>تعلم بأكاديمية الصفوة بالمملكة</h1>
              <p>منصة توفر معلمين و معلمات في بيتكم و اونلاين</p>
              <a className='btn' href="#contact" >تواصل معنا</a>
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