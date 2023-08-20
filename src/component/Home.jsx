import React from 'react'
import Header from './Header/Header';
import About from './About/About'
import Services from './OurServices/Services'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
const Home= () =>{
  return (
    <div>
        <Header/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home