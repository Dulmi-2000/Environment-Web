import React from 'react'
import './services.css'
import ServiceCard from '../../Componenets/Service_Card/ServiceCard'
import service1 from '../../Assets/service1.jpg'
import service2 from '../../Assets/service2.webp'
import service3 from '../../Assets/service3.webp'
import service4 from '../../Assets/service4.jpg'
import service5 from '../../Assets/service5.jpg'
import service6 from '../../Assets/service6.jpg'
import service7 from '../../Assets/service7.jpg'
import service8 from '../../Assets/service8.jpg'
import PageIntro from '../../Componenets/PageInto/PageIntro'
import others1 from '../../Assets/other-s1.png'
import others2 from '../../Assets/other-s2.png'
import others3 from '../../Assets/other-s3.png'
import others4 from '../../Assets/other-s4.jpg'
import { useNavigate } from 'react-router-dom';


function Sevices() {
  const navigate = useNavigate();

  const handleBoxClick = (path) => {
      navigate(path);
      window.scrollTo(0, 0);
    };

  return (
    <div>
      <PageIntro 
        title="Services" 
        description="Welcome to the Central Environmental Authority (CEA) Services page. We provide a range of environmental solutions,
           including Environmental Protection Licensing, Environmental Impact Assessments (EIA), and environmental recommendations. 
           Our services also cover public complaints, laboratory testing, waste management licensing, and GIS/RS solutions. 
           Explore our offerings aimed at protecting Sri Lanka's environment and promoting sustainable development."
      />
      <br/>
      <div className="service-cards-blocks">
                     
                  <div className='container service-cards'>
                  <ServiceCard
                      title="Environmental Protection Licensing"
                      image={service1}
                      />
                      <ServiceCard
                      title="Environmental Impact Assessment (EIA) / IEE"
                      image={service2}
                      />
                       <ServiceCard
                      title="Environmental Recommendation"
                      image={service3}
                      />
                      <ServiceCard
                      title="Environmental Education & Awareness, Promotion & Information Services"
                      image={service4}
                      />
                           <ServiceCard
                      title="Laboratory Services"
                      image={service5}
                      />
                      <ServiceCard
                      title="Scheduled Waste Management Licensing"
                      image={service6}
                      />
                       <ServiceCard
                      title="Public Complaints Related to Environment"
                      image={service7}
                      /><ServiceCard
                      title="Provisions of GIS/RS Services"
                      image={service8}
                    />
                    </div>
                 </div>
                 <div className='container important-info-section'>
                      <h5 className='heading'>Other Services</h5>
                      
                      <div className='other-service-block'>
                        <div className='info-row'>
                          <div 
                            className='info-box'
                            onClick={() => handleBoxClick('/Complaints/Complaints')}
                          >
                            <img src={others1} alt='image' className='service-img' />
                            <span className='links'>Complaints Submission</span>
                          </div>
                          
                          <div 
                            className='info-box'
                            onClick={() => handleBoxClick('/NgoRegistartion/NgoRegistartion')}
                          >
                            <img src={others2} alt='image' className='service-img' />
                            <span className='links'>Non-Governmental Environment Organization Registration</span>
                          </div>
                        </div>
                        
                        <div className='info-row'>
                          <div 
                            className='info-box'
                            onClick={() => handleBoxClick('/environmental-org-registration')}
                          >
                            <img src={others3} alt='image' className='service-img' />
                            <span className='links'>Job Opportunities</span>
                          </div>
                          
                          <div 
                            className='info-box'
                            onClick={() => handleBoxClick('/NgoRegistartion/NgoRegistartion')}
                          >
                            <img src={others4} alt='image' className='service-img' />
                            <span className='links'> Hazardous Waste Transit Approvals
                            </span>
                          </div>
                        </div>
                      </div>
      </div>
      <br/><br/><br/><br/>
                    
    </div>
  )
}

export default Sevices