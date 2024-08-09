import React from 'react'
import './footer.css'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { PiDotOutlineFill } from "react-icons/pi";

function Footer() {
  return (
      <>
          <div className='footer'>
              <div className='container footer-block'>
                  
              <div className='footer-item'>
                  <h5 className='footer-topics'>Central Environment Authority</h5>
                  <div className='contacts'>
                          <div className='contact-row'>
                              <h6 className='intro-data'>The Central Environmental Authority governs Sri Lanka’s environment,<br/>
                                  ensuring sustainable development<br/> since 1981.
                              </h6>
                          </div>
                          <div className='contact-row'>
                              <a href="https://web.facebook.com/CEASriLanka?ref=embed_page" target="_blank" rel="noopener noreferrer" className='utube'>
                              <FaFacebookF className='fb' /></a>
                              <a href="https://www.youtube.com/channel/UCAJe39mKx2LACmYIjpUs6XQ" target="_blank" rel="noopener noreferrer" className='utube'>
                               <RiYoutubeLine className='utube'/></a>
                      </div>
                  </div>     
                  </div>

              <div className='footer-item'>
                  <h5 className='footer-topics'>Environmental Info</h5>
                  <div className='links'>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Information Center</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Library Catalogue</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>National Wetland Database</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>CEA e-Repository</Link>
                      </div>
                  </div>     
                  </div>



                  <div className='footer-item'>
                  <h5 className='footer-topics'>Quick Links</h5>
                  <div className='links'>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Air Quality Monitoring</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Downloads</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>National Wetland Directory</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Weather</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Situation Report</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Red List of Threatened Fauna and Flora of Sri Lanka</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Environment Related Agencies</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Status Of Kalani River Basin</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Air/Water quality Index</Link>
                      </div>
                      <div className='contact-row'>
                      <PiDotOutlineFill className='bullet'/>
                          <Link className='quick-links'>Authorized Hazardous Waste Management in Sri Lanka</Link>
                      </div>
                  </div>     
                  </div>



              <div className='footer-item'>
                  <h5 className='footer-topics'>Contact</h5>
                  <div className='contacts'>
                          <div className='contact-row'>
                          <MdOutlineLocationOn className='footer-icons' />
                      <a href="https://maps.app.goo.gl/DP5y7zM3QBfCXrP57" target="_blank" rel="noopener noreferrer" className='location-link'>
                      
                      <h6 className='contact-data'>
                  Central Environmental Authority,<br />
                  104, <br />
                  Denzil Kobbekaduwa Mawatha, <br />
                  Battaramulla, <br />
                  Sri Lanka
                </h6>
              </a>
                      </div>
                      <div className='contact-row'>
                          <MdLocalPhone className='footer-icons-call' />
                          <h6 className='contact-data'> 011-2872419<br/>  011-2872278 <br/> 011-2873447<br/>  011-2873448</h6>
                      </div>
                      <div className='contact-row'>
                          <TfiEmail className='footer-icons-msg'/>
                          <a href="mailto:info@cea.lk" className='utube'>info@cea.lk</a>
                      </div>
                  </div>     
                    
              </div>


             
              </div>
      </div>
      </>
  )
}

export default Footer