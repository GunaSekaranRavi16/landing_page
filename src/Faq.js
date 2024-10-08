// Faq.js
import React from 'react';

const Faq = () => {
  const faqs = [
    { question: 'What premium skills will I learn in this CapCut course?', answer: 'You will learn advanced techniques, including color grading, masking, keyframing, and adding animations and effects.' },
    { question: 'Is prior video editing experience required for this premium course?', answer: 'No, this course is designed to take your interest to the next level, making it suitable for both beginners and those with some experience' },
    { question: 'who is the mentor ?', answer: 'He is M.Yogaram vignesh. owner of CC MEDIA a Video marketing agency based out of chennai' },
    { question: 'For whom this course is suitable for ?', answer: 'Business owner, women looking for work from home, students looking for part time money making,content creators and alos those who have intense interest on video editing' }
    // More FAQs...
  ];

  return (
    <section className="faq">
      <h2 className='t1'>FAQs</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <br></br>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faq;
