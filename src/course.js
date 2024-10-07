import React from 'react';
import '../src/course.css'; // Import your CSS file for styling

function CapCutCourseSection() {
  const modules = [
    { title: 'Getting started with Capcut', description: '' },
    { title: 'Understanding the interface and Importing Media', description: '' },
    { title: 'Enhancing and Adding elements to your Videos', description: '' },
    { title: ' Advanced Editing Tips & Finalizing your Video', description: '' },
    { title: 'Monetization', description: '' },
    
  ];

  return (
    <section className="capcut-course">
      <h2>What’s Inside the Course?</h2>
      <h3>Your Journey to become a video editing Expert Starts Here</h3>
      <div className="modules-container">
        {modules.map((module, index) => (
          <div className="module-card" key={index}>
            <h4>Module #{index + 1}</h4>
            <p>{module.title}</p>
            <p>{module.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CapCutCourseSection;