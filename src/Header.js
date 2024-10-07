// Header.js


import React from 'react';
// import React from 'react';
import { Helmet } from 'react-helmet';
// import './Header.css';
import CourseDescription from './CourseDescription';

const Header = () => {
  return (
    <div className="header">
      <Helmet>
      <title>Learn Capcut Mastery in Tamil | Capcut Course in Tamil | Tamil Business Tribe</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      </Helmet>
      <h1>Become a Pro Video Editing  in Just 3 Hours! </h1>
      {/* <span>CapCut</span> */}
      <p className="warning-text">🚀From Noob to Expert: A CapCut Masterclass Tailored for Beginners! 🚀 </p>
      <div className='yt'>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ECV3Jck-Dt8?si=32lVexY_prhwYvYA" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      <CourseDescription/>
      </div>
      <h1> Ready to Edit Like a Pro?</h1>
      <button >Enroll in our Masterclass Today and Claim Bonuses Worth ₹4,500—Absolutely FREE!
      </button>
    </div>
  );
};

export default Header;

// import React from 'react';

// const Header = () => {
//   return (
//     <header className="header">
//       <h1>Learn & Master Video Editing in Just 5 Hours Using CapCut</h1>
//       <p>Zero To Hero: Beginner-Friendly CapCut Mastery Course</p>
//       <div className="header-buttons">
//         {/* <button>Watch Video</button> */}
//         <iframe width="560" height="315" src="https://www.youtube.com/embed/yY8vDcidhPQ?si=BLFKSWQ14zEMdgU-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//         <br></br> <button>Get Course Now</button>
//       </div>
//     </header>
    
//   );
// };

// export default Header;
