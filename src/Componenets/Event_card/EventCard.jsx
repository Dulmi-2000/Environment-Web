import React from 'react'
import './eventCard.css'
import event1 from '../../Assets/event1.jpg'

function EventCard() {
  return (
      <>
          <div className='event-section'>
        <div className='event'>
          <div className='event-box'>
             <div className='img-section'>
                  <img src={event1} alt='image' className='event-img'/>
              </div>
                  <div className='info-section-large'>
                      
                      <h5 className='event-name'>Environment Pioneer President’s Medal Awarding Ceremony</h5>
                      <br/>
                      <p className='para-large'>The 10th Environment Pioneer President’s Medal Awarding Ceremony 
                          held at the Bandaranaike Memorial International Conference Hall..
                      <section className='read-more'>Read More</section>
                      </p>
              </div>
              </div>

              <div className='event-box'>
             <div className='img-section'>
                  <img src={event1} alt='image' className='event-img'/>
              </div>
                  <div className='info-section-large'>
                      
                      <h5 className='event-name'>Environment Pioneer President’s Medal Awarding Ceremony</h5>
                      <br/>
                          <p className='para-large'>The 10th Environment Pioneer President’s Medal Awarding Ceremony held at the Bandaranaike Memorial International Conference Hall..
                      <section className='read-more'>Read More</section>
                      </p>
              </div>
              </div>
              
          </div>
          
          <div className='event'>
          <div className='event-box'>
             <div className='img-section'>
                  <img src={event1} alt='image' className='event-img'/>
              </div>
                  <div className='info-section-large'>
                      
                      <h5 className='event-name'>Environment Pioneer President’s Medal Awarding Ceremony</h5>
                      <br/>
                      <p className='para-large'>The 10th Environment Pioneer President’s Medal Awarding Ceremony 
                          held at the Bandaranaike Memorial International Conference Hall..
                      <section className='read-more'>Read More</section>
                      </p>
              </div>
              </div>

              <div className='event-box'>
             <div className='img-section'>
                  <img src={event1} alt='image' className='event-img'/>
              </div>
                  <div className='info-section-large'>
                      
                      <h5 className='event-name'>Environment Pioneer President’s Medal Awarding Ceremony</h5>
                      <br/>
                          <p className='para-large'>The 10th Environment Pioneer President’s Medal Awarding Ceremony held at the Bandaranaike Memorial International Conference Hall..
                      <section className='read-more'>Read More</section>
                      </p>
              </div>
              </div>
              </div>
              </div>
      </>
  )
}

export default EventCard