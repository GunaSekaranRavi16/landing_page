// App.js
import React from 'react';
import Header from '../src/Header';
// import MasteryCourse from '../src/MasteryCourse';
// import CourseBenefits from '../src/CourseBenefits';
import Testimonials from '../src/Testimonials';
import BonusOffers from '../src/BonusOffers';
import TrainerInfo from '../src/TrainerInfo';
import VideoSection from '../src/VideoSection';
import CallToAction from '../src/CallToAction';
import CapCutCourseSection from './course';
// import CourseDescription from './CourseDescription';
import Faq from '../src/Faq';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Testimonials />
      <VideoSection/>
      <CallToAction/>
      <CapCutCourseSection/>
      <TrainerInfo />
      <Faq />
    </div>
  );
}

export default App;
