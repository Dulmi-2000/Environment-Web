import React from 'react'
import PageIntro from '../../Componenets/PageInto/PageIntro'

function Regulations() {
  return (
    <>
      <div className='publications-page'> 
      <PageIntro 
        title="Regulations" 
          description="The Sri Lanka Environmental Authority enforces environmental regulations to protect the nation's
           natural resources, ecosystems, and public health. These regulations cover pollution control, waste management, 
           land use, and sustainable development, ensuring compliance with national policies and 
          international conventions, fostering a balanced approach to economic growth and environmental conservation."
        />

        <div className='container publications-body'>
          <div className='downloads-table'>
          <h5 className='contact-details-heading'>Acts</h5>
            <table className='data-table'>
              <thead>
              <tr>
                <th>Name of the Act</th>
                <th>Download</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td> EPP and ECO Club Targets 2017</td>
                  <td>  
                    <a href="http://localhost:5001/download/EPP_AND_ECO_-_Web_page_New_-_English" download>
                    <button className='submit-btn'>Download</button>
                   </a></td>
                </tr>
              </tbody>

            </table>
          </div>
        
        <div className='downloads-table'>
          <h5 className='contact-details-heading'>Regulations</h5>
            <table className='data-table'>
              <thead>
              <tr>
                <th>Name of the Regulation</th>
                <th>Download</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>  Guideline for Rail Noise Assessment Criteria for Rapid Rail Transit Systems</td>
                  <td>  
                    <a href="http://localhost:5001/download/Rapid-Rail-Guideline-CEA_Compressed" download>
                    <button className='submit-btn'>Download</button>
                   </a></td>
                </tr>
                <tr>
                  <td> Guideline for Traffic Noise Assessment Criteria for Expressways</td>
                  <td>  
                    <a href="http://localhost:5001/download/Expressway-Guideline-CEA_Compressed" download>
                    <button className='submit-btn'>Download</button>
                   </a></td>
                </tr>
                <tr>
                  <td>	Air Quality Index for Sri Lanka (AQI-SL), Calculation & Guideline - CEA.LK - V1.0.</td>
                  <td>  
                    <a href="http://localhost:5001/download/AQI-SL_Calculation_Guideline_CEA.LK_V1.0" download>
                    <button className='submit-btn'>Download</button>
                   </a></td>
                </tr>
                <tr>
                  <td>	Contingency Response Action Plan for Deterioration of Air Quality in Sri Lanka (CRAP-DAQ-SL) V1.0</td>
                  <td>  
                    <a href="http://localhost:5001/download/CRAP-DAQ-SL_Contingency_Response_Action_Plan_for_Deterioration_of_Air_Quality_in_Sri_Lanka_V1.0-1" download>
                    <button className='submit-btn'>Download</button>
                   </a></td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
    </div>
    </>
  )
}

export default Regulations