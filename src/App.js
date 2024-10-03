import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componenets/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Componenets/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './Componenets/NavbarHeader/HeaderNav';
import ContactUsInquiries from './Pages/ContactUs/Inquiries';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Sevices'
import Divisions from './Pages/Divisions/Divisions';
import Publications from './Pages/Publications/Publications';
import Regulations from './Pages/Regulations/Regulations';
import FAQ from './Pages/FAQ/FAQ';
import Complaints from './Pages/Complaints/Complaints'
import NgoRegistartion from './Pages/NgoRegistration/NgoRegistration'
import ContactDetails from './Pages/ContactUs/ContactDetails';
import PhotoGallery from './Pages/Media/PhotoGallery/PhotoGallery'

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
          <Route path='/Media/PhotoGallery' element={<PhotoGallery />} />
          <Route path='/Publications/Publications' element={<Publications />} />
          <Route path='/Regulations/Regulations' element={<Regulations />} />
          <Route path='/FAQ/FAQ' element={<FAQ />} />
          <Route path='/ContactUs/ContactUsInquiries' element={<ContactUsInquiries />} />
          <Route path='/ContactUs/ContactDetails' element={<ContactDetails />} />
          <Route path='/NgoRegistartion/NgoRegistartion' element={<NgoRegistartion />} />
          <Route path='/Complaints/Complaints' element={<Complaints />} />
        
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
