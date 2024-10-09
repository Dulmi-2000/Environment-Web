import React from 'react'
import './publications.css'
import PageIntro from '../../Componenets/PageInto/PageIntro'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Publications() {

  const [groupedPublications, setGroupedPublications] = useState({});

  // Fetch publications data from the server
  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/publications');
        const pubs = response.data;

        // Group publications by category
        const grouped = pubs.reduce((acc, pub) => {
          const categoryName = pub.categoryName || 'Uncategorized'; 
          if (!acc[categoryName]) {
            acc[categoryName] = [];
          }
          acc[categoryName].push(pub);
          return acc;
        }, {});

        setGroupedPublications(grouped); 
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };
    fetchPublications();
  }, []);

  return (
    <>
      <div className='publications-page'> 
      <PageIntro 
        title="Publications" 
          description="Explore our comprehensive collection of publications,
           which provide valuable insights into Sri Lanka's environmental 
           policies, research, and regulatory frameworks. These documents, 
           produced by the Central Environmental Authority (CEA), serve as key 
           resources for understanding
           the nation's efforts in environmental protection and sustainable development. 
           Whether you are a researcher, policymaker, or concerned citizen, our publications 
           offer a wealth of knowledge to support informed decision-making and active 
           participation in preserving our natural heritage."
        />

<div className='container publications-body'>
      {Object.keys(groupedPublications).map(categoryName => (
        <div key={categoryName} className='downloads-table'>
          <h5 className='contact-details-heading'>{categoryName}</h5>
          <table className='data-table'>
            <thead>
              <tr>
                <th>Name of the Publication</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {groupedPublications[categoryName].map(pub => (
                <tr key={pub._id}>
                  <td>{pub.displayName}</td>
                  <td>
                    <a href={`http://localhost:3000/api/download/${pub._id}`} download> 
                      <button className='submit-btn'>Download</button>
                      
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
        </div>
        </div>
    </>
  )
}

export default Publications