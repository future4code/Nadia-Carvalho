import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageSection from '../../../aula18-componentes/personalpage/src/components/PageSection';

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
