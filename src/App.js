import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Componenets/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './Componenets/NavbarHeader/HeaderNav';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Services';
import Divisions from './Pages/Divisions/Divisions';
import Media from './Pages/Media/Media';
import Publications from './Pages/Publications/Publications';
import Regulations from './Pages/Regulations/Regulations';
import FAQ from './Pages/FAQ/FAQ';


function App() {
  return (
    <div className="App">
      <Router>
        <HeaderNav />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs/AboutUs' element={<AboutUs />} />
          <Route path="/Services/Services" element={<Services />} />
          <Route path="/Divisions/Divisions" element={<Divisions/>} />
          <Route path='/Media/Media' element={<Media />} />
          <Route path='/Publications/Publications' element={<Publications />} />
          <Route path='/Regulations/Regulations' element={<Regulations />} />
          <Route path='/FAQ/FAQ' element={<FAQ />} />
          <Route path='/ContactUs/ContactUs' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
