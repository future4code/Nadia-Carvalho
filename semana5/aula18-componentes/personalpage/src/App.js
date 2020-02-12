import React from 'react';
import './App.css';
import PersonalData from './slices/PersonalData'
import ProfessionalHistory from './slices/ProfessionalHistory'
import SocialMedia from './slices/SocialMedia'

function App() {
  return (
    <div className="App">
      <PersonalData />
      <ProfessionalHistory />
      <SocialMedia />
    </div>
  );
}

export default App;
