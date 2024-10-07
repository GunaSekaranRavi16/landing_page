// Testimonials.js
import React from 'react';
import '../src/test.css';
import student from '../src/immg/students.png'
import content_crt from '../src/immg/content.png'
import teacher from '../src/immg/online-learning.png'
import gd from '../src/immg/graphic-designer.png'
import wp from '../src/immg/engineer.png'


const Testimonials = () => {
  const questions = [
    { text: 'Are you an aspiring content creator looking to boost your video editing skills with CapCut? ' },
    { text: 'Do you struggle to achieve that polished, professional look in your videos?  ' },
    { text: 'Searching for a beginner-friendly course in Tamil that covers everything from basic transitions to advanced editing effects?' },
  ];
  return (
    <section className="mastery-course">
      <h2>Who Should Join This Masterclass?</h2>
      <div className="course-categories">
        <div className="category">
      <img decoding="async" width="300" height="300" 
      src={student}/> 
          <p>Students</p>
        </div>
        <div className="category">
        <img decoding="async" width="300" height="300" 
        src={content_crt}/>
          <p>Content Creator</p>
        </div>
        <div className="category">
        <img loading="lazy" decoding="async" width="243" height="223" 
        src={teacher}/>
          <p>Digital Coaches</p>
        </div>
        <div className="category">
        <img loading="lazy" decoding="async" width="300" height="300" 
        src={gd}/>
          <p>Graphics Designers</p>
        </div>
        <div className="category">
        <img loading="lazy" decoding="async" width="300" height="300" 
        src={wp}/>
          <p>Working Professionals</p>
        </div>
      </div>
      <div className="course-questions">
      {questions.map((question, index) => (
        <div className="question-card" key={index}>
          <p>{question.text}</p>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Testimonials;
