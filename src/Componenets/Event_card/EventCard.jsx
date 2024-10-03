import React, { useEffect, useState } from 'react';
import './eventCard.css';
import event1 from '../../Assets/event1.jpg';

function EventCard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const renderEventBox = (event, index) => (
    <div className='event-box' key={index}>
      <div className='img-section'>
     
                      {event.image && (
                        <img src={`http://localhost:3000/${event.image}`} alt={event.title} className='event-img'/>
                      )}
                  
      </div>
      <div className='info-section-large'>
        <h5 className='event-name'>{event.title}</h5>
        <p className='para-large'>
          {event.content}
         
        </p>
      </div>
    </div>
  );

  return (
    <div className='event-section'>
      {[0, 1, 2].map((i) => (
        <div className='event' key={i}>
          {events.slice(i * 2, i * 2 + 2).map(renderEventBox)}
        </div>
      ))}
    </div>
  );
}

export default EventCard;
