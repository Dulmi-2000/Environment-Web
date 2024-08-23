/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import './home.css'
import React from 'react'
import cover from '../Assets/cover.jpg'
import president from '../Assets/president.png'
import LeaderCard from '../Componenets/Leaders_Cards/LeaderCard'
import ServiceCard from '../Componenets/Service_Card/ServiceCard'
import service1 from '../Assets/service1.jpg'
import service2 from '../Assets/service2.webp'
import service3 from '../Assets/service3.webp'
import service4 from '../Assets/service4.jpg'
import service5 from '../Assets/service5.jpg'
import service6 from '../Assets/service6.jpg'
import service7 from '../Assets/service7.jpg'
import service8 from '../Assets/service8.jpg'
import others1 from '../Assets/other-s1.png'
import others2 from '../Assets/other-s2.png'
import others3 from '../Assets/other-s3.png'
import others4 from '../Assets/other-s4.jpg'
import EventCard from '../Componenets/Event_card/EventCard'
import { useNavigate } from 'react-router-dom';



function Home() {

    const navigate = useNavigate();

    const handleBoxClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
      };

  return (
      <>
        <div className='main-page'>
                  <img className='cover-image' src={cover} alt='cover image'/>
              
              <div className='intro-block'>
                  <div className='container intro'>
                  <h5 className='intro-topic-p'>Welcome to Central Environment Authority
                  </h5>
                  <div className='intro-body'>
                      <p className='intro-para'>
                          The Central Environmental Authority (CEA) was established in August 1981 under the provision of the
                          National Environmental Act No:47 of 1980. The Ministry of Environment and Natural Resources (ME&NR)
                          which was established in December 2001 has the overall responsibility in the affairs of the CEA with
                          the objective of integrating environmental considerations in the development process of the country.
                          The CEA was given wider regulatory powers under the National Environment(Amendment) Acts No:56 of
                          1988 and No:53 of 2000.
                      </p> 
                  </div>
                  </div> 
              </div>

              <div className='president-block'>
              <div className='container presidents-section'>
                  <div className='presidents-img-section'>
                      <img src={ president }  className='presidents-img'/>
                  </div>
                  <div className='predents-msg-section'>
                      <h5 className='president-topic'> World Environment Day Message of</h5>   
                      <h5 className='president-topic'>The Hon. President, Mr. Ranil Wickremesinghe</h5>
                      <p className='president-para'>
                          As a nation, we find ourselves increasingly vulnerable to the adverse impacts of climate change,
                          a consequence of ongoing environmental degradation. It is indisputable that failure to mitigate
                          this phenomenon will propel our ecosystem toward irreversible destruction, imperiling the very existence of humanity.
                      </p>
                      <p className='president-para-small'>
                          As a nation, we find ourselves increasingly vulnerable to the adverse impacts of climate change,
                          a consequence of ongoing environmental degradation.
                      </p>
                      <div>
                          <button  className='read-more-btn'>Read More</button>
                      </div>
                  </div>
              </div>
              </div>


              


              
              <div className='container home-leader-section'>
              <LeaderCard/>
              </div>

              
              <div className="service-cards-block">
                      <h5 className='services-topic'>Services</h5>
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
                    
                    {/* other services */}
                    <div className='container important-info-section'>
                      <h5 className='services-topic'>Other Services</h5>
                      
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

              
            
              {/*news */}
        <div className='news-events'>
              <div className='container event-block'>
                      <h5 className='services-topic'>Events & News</h5>
                      <br/>
                      <EventCard/>
                   </div>
              </div>

              </div>

      </>
  )
}

export default Home