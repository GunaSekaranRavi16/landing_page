// TrainerInfo.js
import React from 'react';
import vignesh from '../src/immg/Vignesh.jpg'

const TrainerInfo = () => {
  return (
    <section className="trainer-info">
      <h2>About Your Instructor</h2>
      <img className="profile" src={vignesh}/>
      <div className="trainer-details">
        <h3>Yogaram Vignesh M</h3>
        <p>Content Creator | Content Marketing Expert | Video Creator | Agency Owner </p>
        {/* <p>Graphic & Web Desig</p> */}
        <button className="enroll-button"><h2>Enroll Now to Unlock Your Potential!</h2>
        <h6>Claim Your FREE Bonuses Worth ₹4,500!</h6>
        </button>
      </div>
      {/* <div className="workshop-banner">
        
      </div> */}
    </section>
  );
};

export default TrainerInfo;
