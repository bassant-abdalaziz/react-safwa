import React from 'react'
import serviceData from '../../Modal/serviceData'
import './style.css'



const  Services =()=>
{
  const servicesDataList = serviceData.map(service=>{
    return(
      <div className='service' key={service.id}>
        <img src={service.img} alt="img" />
        <p>{service.title}</p>
      </div>
    )
  })
    return (
      <div className="our-services" id="services">
        <div className="container">
          <p className='head'>الخدمات</p>
          <h2 className='heading'>ماذا نوفر</h2>
          <div className='services'>
            {servicesDataList}
          </div>
        </div>
      </div>
  )
}

export default Services