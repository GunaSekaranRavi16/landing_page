// TrainerInfo.js
import React from 'react';
import vignesh from '../src/immg/Vignesh.jpg'

const TrainerInfo = () => {
  return (
    <section className="trainer-info">
      <h2 className='t1' data-aos="fade-up">About Your Instructor</h2>
      <img className="profile" src={vignesh} data-aos="zoom-in-down"  data-aos-duration="1000"/>
      <div className="trainer-details" >
        <h3 data-aos="fade-up">Yogaram Vignesh M</h3>
        <p data-aos="fade-up">Video Editor | Content Marketing Expert |
          <br></br> Agency Owner </p>
        {/* <p>Graphic & Web Desig</p> */}
        <button className="enroll-button01"><h2>Enroll Now to Unlock Your Potential!</h2>
        
        </button>
        <h2 className='dis' data-aos="fade-up">Claim Your FREE Bonuses Worth ₹2,500!</h2>
      </div>
      {/* <div className="workshop-banner">
        
      </div> */}
    </section>
  );
};

export default TrainerInfo;
