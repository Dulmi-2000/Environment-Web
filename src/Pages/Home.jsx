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

function Home() {
  return (
      <>
        <div className='main-page'>
              <div >
                  <img className='cover-image' src={cover} alt='cover image'/>
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
                      />
                      <ServiceCard
                      title="Provisions of GIS/RS Services"
                      image={service8}
                  />
                  </div>
                  
          </div>
        </div>
      </>
  )
}

export default Home