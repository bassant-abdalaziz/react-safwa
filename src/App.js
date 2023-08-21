import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import About from './component/About/About';
import Services from './component/OurServices/Services';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
