import React from 'react'
import ServiceCard from '../../Componenets/Service_Card/ServiceCard'
import service1 from '../../Assets/service1.jpg'
import service2 from '../../Assets/service2.webp'
import service3 from '../../Assets/service3.webp'
import service4 from '../../Assets/service4.jpg'
import service5 from '../../Assets/service5.jpg'
import service6 from '../../Assets/service6.jpg'
import service7 from '../../Assets/service7.jpg'
import service8 from '../../Assets/service8.jpg'
import './services.css'
import PageIntro from '../../Componenets/PageInto/PageIntro'

function Sevices() {
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
                    
    </div>
  )
}

export default Sevices