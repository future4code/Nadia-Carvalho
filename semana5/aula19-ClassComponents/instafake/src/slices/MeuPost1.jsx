import React from 'react';
import Post from '../components/Post';
import Haru1 from '../images/Haru1.jpg';
import Haru4 from '../images/haru4.png';

class MeuPost1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Post
        avatar={{ name: "Haru - Dog Influencer", avatar: Haru4 }}
        image={Haru1}
        likeCounter={0}
        commentCounter={0}
      />
    )
  }
}
export default MeuPost1