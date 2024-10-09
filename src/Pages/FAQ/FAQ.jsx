import React, { useState } from 'react'
import PageIntro from '../../Componenets/PageInto/PageIntro'
import './faq.css'
import { BiPlus, BiMinus } from 'react-icons/bi'; 

function FAQ() {
  const faqData = [
    {
      category: 'Environmental Impact Assessment (EIA)',
      questions: [
        {
          question: 'What is the purpose of EIA?',
          answer: 'EIA is a simple process of predicting the potential impacts of development activities on the natural and social environment. EIA also suggests measures to prevent or minimize negative impacts and to enhance positive impacts. EIA ensures sustainable investment for developers and a livable environment for the people. In 1981 EIA was made a legal requirement for projects within the coastal zone and since 1993 is mandatory throughout Sri Lanka for prescribed development projects.',
        },
        {
          question: 'How do I know whether my poropsed site is located within a sensitive area?',
          answer: 'You may get the service of GIS laboratary of Rsearch and Special Project Unit of CEA to verify whether your proposed site is located within a sensitive area.',
        },
      ],
    },
    {
      category: 'Environmental Protection Licence(EPL)',
      questions: [
        {
          question: 'What are the benefits of possessing of an EPL ?',
          answer: 'An EPL (Environmental Protection License) holder gains legal authority to discharge effluents, emit pollutants, and manage waste in compliance with the CEA s environmental standards. This helps the holder minimize environmental impacts, reducing the likelihood of protests from the community and fostering public trust in the industry. Additionally, holding an EPL can attract foreign investors and buyers, enhance eligibility for bank loans to improve operations, and pave the way for pursuing ISO certification, enabling the industry to meet international environmental obligations.',
        },
        {
          question: 'Whether inspection fee has to be paid when renewing the EPL?',
          answer: 'Inspection fee has to be paid only when applying for the first EPL. Therefore it is not necessary pay the inspection fee for the EPL renewal. However if the applicant fails to submit the renewal application on time, he/she has to submit a fresh EPL application again instead of the EPL-Renewal application. In this circumstance he/she has to pay the inspection fee also',
        },
        {
          question: 'When shall be the Environmental Protection Licence fee paid?',
          answer: 'When the decision of issuing EPL is made by the authorized officer applicable conditions to the EPL will be prepared and submitted to the Legal Division for legal approval. Once the approval of the legal division is granted a written request will be made to the applicant for the payment of EPL fee. Once the licence fee paid the Environmental Protection Licence will be issued with the signature of the authorized signatory.',
        }
      ],
    },
    {
      category: 'Environmental Recommendation (ER)',
      questions: [
        {
          question: 'Is it possible to extend the validity period of the ER.(If need)?',
          answer: 'YEs, it is possible. Written request must be forwarded to the relevant Provincial Office.',
        },
        {
          question: 'What will be the validity period of issued ER?',
          answer: 'The ER is valid for one year period from the date of issue and the valid period is indicated in the Environmental Recommendation.',
        },
        {
          question: 'How much to be paid for an Environmental Recommendation Process?',
          answer: 'Inspection fee has to be paid for the site inspection. At present Minimum amount is Rs: 3360/- and Maximum amount is Rs: 11200/-(with Government approved tax).',
        },
        {
          question: 'How it could be obtained? Is there a specific procedure?',
          answer: 'Yes. Procedure to obtain Environmental Recommendation.',
        },
        {
          question: 'From where an Environmental Recommendation could be obtained?',
          answer: 'From any Provincial offices of the Central Environmental Authority.',
        },
      ],
    },
    
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active question
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    
    <>
    <PageIntro 
        title="Frequently Asked Questions" 
        description="Welcome to the FAQ section of the Central Environmental Authority of Sri Lanka. 
        This page is designed to provide clear answers to common questions about environmental 
        regulations, licensing, compliance, and services. We aim to help you navigate processes efficiently.
           If your query isn’t addressed here, feel free to reach out for further assistance!"
      />
      <div className="faq-container">
      {faqData.map((category, catIndex) => (
        <div key={catIndex} >
          <h3 className="faq-category">{category.category}</h3>
          {category.questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleQuestion(`${catIndex}-${index}`)}>
                <h4 className="faq-question">{item.question}</h4>
                <span>
                  {activeIndex === `${catIndex}-${index}` ? <BiMinus className='plus-minus'/> : <BiPlus className='plus-minus'/>} 
                  
                </span>
              </div>
              {activeIndex === `${catIndex}-${index}` && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
    </>
  )
}

export default FAQ