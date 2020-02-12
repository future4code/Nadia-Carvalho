import React from 'react';
import PageSection from '../components/PageSection'
import ImageButton from '../components/ImageButton'
import logo from '../logo.svg'

function SocialMedia() {
  return (
    <PageSection className="SocialMedia">
      <ImageButton icon={logo} text="Linkedin"/>
    </PageSection>
  );
}

export default SocialMedia;