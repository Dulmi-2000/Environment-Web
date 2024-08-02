import React from 'react'
import leader1 from '../../Assets/leader1.png'
import leader2 from '../../Assets/leader2.png'
import leader3 from '../../Assets/leader3.png'
import leader4 from '../../Assets/leader4.png'
import './leaderCard.css'

function LeaderCard() {
  return (
      <>
       <div className='leader-data'>
        <div className='leader-small'>
         <div className='leader-cards-section'>
             <div className='img-section'>
                  <img src={leader1} alt='image' className='leader1-img'/>
              </div>
              <div className='info-section'>
                  <h5 className='leader-post'>The State Minister</h5>
                  <p className='leader-name'> Mr. Janaka Wakkumbura</p>
              </div>
              
          </div>
          
          <div className='leader-cards-section'>
             <div className='img-section'>
                  <img src={leader2} alt='image' className='leader1-img'/>
              </div>
              <div className='info-section'>
                  <h5 className='leader-post'>The State Minister</h5>
                  <p className='leader-name'> Mr. Janaka Wakkumbura</p>
              </div>
              </div>
          </div>
          
          <div className='leader-large'>
          <div className='leader-cards-section-large'>
             <div className='img-section'>
                  <img src={leader3} alt='image' className='leader1-img'/>
              </div>
                  <div className='info-section-large'>
                      <p className='para-large'>Central Environmental Authority, which is
                          one of the key institutions operating in Sri Lanka..
                      <section className='read-more'>Read More</section>
                      </p>
                  
                      <p className='leader-name-large'> Mr.Venura Fernando, </p>
                  <h5 className='leader-post-large'>Chairman of Central Environmental Authority</h5>
              </div>
              </div>

              <div className='leader-cards-section-large'>
             <div className='img-section'>
                  <img src={leader4} alt='image' className='leader1-img'/>
              </div>
                  <div className='info-section-large'>
                          <p className='para-large'>The mutual bond that exists between
                              the human race and the environment..
                      <section className='read-more'>Read More</section>
                      </p>
                  
                      <p className='leader-name-large'> Mr. Hemantha Jayasinghe, </p>
                  <h5 className='leader-post-large'>Director General of Central Environmental Authority</h5>
              </div>
              </div>
              </div>
         </div>
      </>
  )
}

export default LeaderCard