import React from 'react';
import '../src/course.css'; // Import your CSS file for styling
import capcut from '../src/immg/Software_Box_Mockup-Capcut.png';
function CapCutCourseSection() {
  const modules = [
    { title: 'Getting started with Capcut', description: '' },
    { title: 'Understanding the interface and Importing Media', description: '' },
    { title: 'Enhancing and Adding elements to your Videos', description: '' },
    { title: 'Pro Tips to Polish & Perfect Your Videos!', description: '' },
    { title: 'How to Monetize Your Videos Like a Pro!', description: '' },
    
  ];

  return (
    <section className="capcut-course">
      <h2 className='t1' data-aos="fade-up">What’s Inside the <span>Course</span>?</h2>
      <h3 data-aos="fade-up">Your Journey to become a video editing Expert Starts Here</h3>
      <div className='arr'>
      {/* <img src={capcut} height='300' width='500' className='capcut'/> */}
      <div className="modules-container" >
        {modules.map((module, index) => (
          <div className="module-card" key={index} data-aos="fade-up">
            <h1>Module #{index + 1}</h1>
            <p>{module.title}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default CapCutCourseSection;