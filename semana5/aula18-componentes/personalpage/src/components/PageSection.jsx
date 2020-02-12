import React from 'react';

function PageSection(props) {
  return (
    <section className="PageSection">
      {props.children}
    </section>
  );
}

export default PageSection;
