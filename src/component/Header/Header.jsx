import React from 'react'
import './style.css';

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
              <button className='btn'><a href="#contact" >تواصل معنا</a></button>
          </div>

          <div className='image'>
            <img src='images/student.png' alt="home" />
          </div>
        </div> 
    </div>
</div>
  )
}

export default Header