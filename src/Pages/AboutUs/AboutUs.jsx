import React from 'react'
import './aboutUs.css'
import PageIntro from '../../Componenets/PageInto/PageIntro'
import aboutImg from '../../Assets/aboutImg.png'
import leaficon from '../../Assets/leaf2.webp'

function AboutUs() {
  return (
    <>
     <div className='about-us-page'>
      <PageIntro 
        title="About Us" 
          description="The Central Environmental Authority (CEA) was established on
         12th August 1981, under the provision of the National Environmental Act
          No:47 of 1980. The Ministry of Environment which was established in December 
          2001 has the overall responsibility in the affairs of the CEA with the objective 
          of integrating environmental considerations into the development process of the country. 
          The CEA was given wider regulatory powers under the National Environment (Amendment)
           Acts No:56 of 1988 and No:53 of 2000."
        />
        
        <div className='container vison-mission'>
          <div className='one-side'>
          <img src={ aboutImg }  className='about-img'/>
          </div>
          <div className='two-side'>
            <h5 className='vision-heading'>Our Vision</h5>
            <p className='vision-para'>A Clean and Green Environment through Service Excellency</p>
            <hr className='hr-row'/>
            <h5 className='vision-heading'>Our Mission</h5>
            <p className='vision-para'>Flagship of the nation in protecting and managing the 
              environment by coordination, public participation, enforcement, appropriate
              technical interventions, education and awareness
            </p>
         </div>
        </div >

        <div className='container objectives'>
        <h5 className='vision-heading'>Our Objectives</h5>
          <div className='objective-row'>
            <img src={leaficon} className='leaf-img' />
            <p className='obj-para'>Protect, manage and enhance the environment
            </p>
          </div>
          <div className='objective-row'>
            <img src={leaficon} className='leaf-img' />
            <p className='obj-para'>Regulate, maintain and control the quality of the environment
            </p>
        </div>
        <div className='objective-row'>
            <img src={leaficon} className='leaf-img' />
            <p className='obj-para'>Prevent, abate and control pollution
            </p>
        </div>
        </div>
      </div>
      
      
    </>
  )
}

export default AboutUs