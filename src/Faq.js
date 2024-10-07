// Faq.js
import React from 'react';

const Faq = () => {
  const faqs = [
    { question: 'Who is this course for?', answer: 'This course is for students, creators, professionals, etc.' },
    { question: 'What is the duration?', answer: 'The duration is 5 hours.' },
    // More FAQs...
  ];

  return (
    <section className="faq">
      <h2 className='t1'>FAQs</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faq;
