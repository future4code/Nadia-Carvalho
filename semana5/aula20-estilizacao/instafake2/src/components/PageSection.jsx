import React from 'react';

class PageSection extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <section className="PageSection">
        {this.props.children}
      </section>
    );
  }
}
export default PageSection;
