import React from 'react';
import PageSection from '../components/PageSection'
import BigCard from '../components/BigCard'
import logo from '../logo.svg'

function ProfessionalHistory() {
  return (
    <PageSection className="ProfessionalHistory">
      <h2>Experiências Profissionais</h2>
      <BigCard title="Experiência Profissional 1" avatar={logo} text="Lorem ipsum dolor sit amet consectetur adipiscing elit leo, fames rhoncus mus volutpat phasellus habitant sollicitudin, nec donec erat interdum sapien tristique luctus. Donec aliquet ad luctus dis netus tincidunt pharetra, mi finibus potenti duis mattis risus imperdiet fames, turpis quam eget integer metus nostra."/>
      <BigCard title="Experiência Profissional 2" avatar={logo} text="Lorem ipsum dolor sit amet consectetur adipiscing elit leo, fames rhoncus mus volutpat phasellus habitant sollicitudin, nec donec erat interdum sapien tristique luctus. Donec aliquet ad luctus dis netus tincidunt pharetra, mi finibus potenti duis mattis risus imperdiet fames, turpis quam eget integer metus nostra."/>
    </PageSection>
  );
}

export default ProfessionalHistory;