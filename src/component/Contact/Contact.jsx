import React from 'react'
import './style.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone } from '@fortawesome/free-solid-svg-icons'

import Whatsapp from '../WhatsApp/Whatsapp';

const Contact= ()=> {
  return (
  <div className="contact-us"  id="contact">
    <div className="container">
      <div className='content'>
          <div className="contact-information">
              <p className='head'>مراحل طلب المعلم</p>
              <h2 className='heading'>تواصل معنا</h2>
              <p>إِرسال طلب معلم</p>
              <p>ستصلك عروض (تسعيرات) من معلمين مختلفين</p>
              <p>اختيار العرض (التسعيرة) التي تناسبك</p>
              <p> تقييمك للخدمة و المعلم هو موضع اهتمامنا فلا تتردد بالمشاركة في التقييم</p>

              <div className='contact'>
                <Whatsapp/>
                <div className='phone'>
                  <FontAwesomeIcon icon={faPhone} /><span>0562625486</span>
                </div>
              </div>
          </div>

          <div className='image'>
            <img src='images/contact.png' alt="contact" />
          </div>
        </div> 
    </div>
</div>
  )
}

export default Contact