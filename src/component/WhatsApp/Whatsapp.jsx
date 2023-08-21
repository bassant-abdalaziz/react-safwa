import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Whatsapp() {
  return (
    <div className='whatsapp'>
     <button className='btn-whatsapp'>
        <a target='-blank' href="https://wa.me/+966559287026">
        <FontAwesomeIcon icon={faWhatsapp} className='fa'/>
        بدأ المحادثة</a>
     </button>
    </div>
  )
}

export default Whatsapp