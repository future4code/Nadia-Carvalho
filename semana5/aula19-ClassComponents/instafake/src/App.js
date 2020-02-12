import React from 'react';
import './App.css';
import PageSection from './components/PageSection'
import MeuPost1 from './slices/MeuPost1'
import MeuPost2 from './slices/MeuPost2'
import MeuPost3 from './slices/MeuPost3'

function App() {
  return (
    <PageSection className="App">
      <MeuPost1/>
      <MeuPost2/>
      <MeuPost3/>
    </PageSection>
  );
}

export default App;
