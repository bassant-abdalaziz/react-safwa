import React from 'react'
import './style.css';

import contactImg from '../../assets/contact.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
                <Whatsapp background="rgb(4, 224, 74)">
                  <a target='-blank' href="https://wa.me/+966559287026">
                  <FontAwesomeIcon icon={faWhatsapp} className='fa'/>
                  بدأ المحادثة</a>
                </Whatsapp>
                
                <Whatsapp background="#56bdd1">
                  <a href="tel:+966562625486" target='-blank'>
                  <FontAwesomeIcon icon={faPhone} className='fa'/> 0562625486</a>
                </Whatsapp>
              </div>
          </div>

          <div className='image'>
            <img src={contactImg} alt="contact" />
          </div>
        </div> 
    </div>
</div>
  )
}

export default Contact