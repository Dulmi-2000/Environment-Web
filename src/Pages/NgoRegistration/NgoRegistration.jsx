import React from 'react'
import './ngoRegistration.css'
import PageIntro from '../../Componenets/PageInto/PageIntro'

function NgoRegistatrion() {
  return (
      <>
    <div>
      <PageIntro 
        title="Non-Governmental Environment Organization Registration" 
          description="For any inquiries or support, the Central Environmental Authority (CEA) is here to assist you.
           Whether you need guidance on environmental regulations, want to submit a concern, or simply have questions,
            our team is ready to help. Contact us via phone, email, or visit our office in Battaramulla. We are committed 
            to protecting Sri Lanka's environment and
            ensuring a sustainable future. Reach out to us, and let's work together for a greener tomorrow."
      />
          </div>
          

      <div className='container ngo-reg-page'>
       <div className='download-body'>
        <div className='download-section'>
          <h5 className='heading-down'>Download the Application</h5>
          <p className='steps'>Please download the application form, complete it, and submit it as instructed. Be sure to follow the guidelines
            provided below for a successful registration.</p>

            <a href="http://localhost:5001/download/NGO_Application_form_-_English" download>
        <button className='download-btn'>Download</button>
      </a>
        </div>
        </div>

        <div className='page-body'>
          <h5 className='heading'>Guidlines for NGO Registration</h5>

          <hr/>
              <div className='guidlines'>
                  <div className='steps-list'>
                      <p className='steps'>1.&nbsp;&nbsp;Complete apppcation form</p>
                      <p className='steps'>2.&nbsp;&nbsp;Constitution of the Organization</p>
                      <p className='steps'>3.&nbsp;&nbsp;Register of the members of the organization</p>
                      <p className='steps'>4.&nbsp;&nbsp;Register of the Executive committee members</p>
                      <p className='steps'>5.&nbsp;&nbsp; A registered certificate which is registered under Divisional Secretariat, District Secretariat or relevant Local Authority</p>
                      <p className='steps'>6.&nbsp;&nbsp;A copy of certificate registration under Social Service Department/ Non Government Organization Secretariat</p>
                      <p className='steps'>7.&nbsp;&nbsp;A copy of a audit of the account year</p>
                      <p className='steps'>8.&nbsp;&nbsp; A brief description about the environmental & other activities going to be implemented in the next years with the participation of the community</p>
                      <p className='steps'>9.&nbsp;&nbsp; Last year progress report</p>
                      <p className='steps'>10.&nbsp;&nbsp; Awards or certificates obtain locally or internationally, please attach copy of it.</p>

                  </div>
              </div>
              </div>
      </div>
      
    </>
  )
}

export default NgoRegistatrion