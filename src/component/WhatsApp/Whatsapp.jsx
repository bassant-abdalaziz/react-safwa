import React from 'react'
import './style.css'


function Whatsapp({children, background}) {
  return (
    <div className='whatsapp'>
     <button className='btn' style={{backgroundColor:background}}>
        {children}
     </button>
    </div>
  )
}

export default Whatsapp