import React from 'react';
import PageSection from '../components/PageSection'
import BigCard from '../components/BigCard'
import SmallCard from '../components/SmallCard'
import ImageButton from '../components/ImageButton'
import logo from '../logo.svg'

function PersonalData() {
  return (
    <PageSection className="PersonalData">
      <h1>Dados Pessoais</h1>
      <BigCard title="Nadia Carvalho" avatar={logo} text="Oi, eu sou a Nadia e esse é meu perfil profissional."/>
      <SmallCard icon={logo} title="E-mail: " text="carvalho.nadiacaroline@gmail.com"/>
      <SmallCard icon={logo} title="Endereço: " text="Curitiba, Paraná"/>
      <ImageButton icon={logo} text="Ver mais" />
    </PageSection>
  );
}

export default PersonalData;
