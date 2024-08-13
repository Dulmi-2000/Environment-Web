import React from 'react';
import './pageIntro.css';

function PageIntro({ title, description }) {
  return (
    <div className='page-intro'>
      <div className='container'>
        <h1 className='page-topic'>{title}</h1>
        <p className='intro-para'>
          {description}
        </p> 
      </div>
    </div>
  );
}

export default PageIntro;
