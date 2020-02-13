import React from 'react';
import Post from '../components/Post';
import Haru2 from '../images/Haru2.jpg'
import Haru4 from '../images/haru4.png';

class MeuPost2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Post
        avatar={{ name: "Haru - Dog Influencer", avatar: Haru4 }}
        image={Haru2}
        likeCounter={0}
        commentCounter={0}
      />
    )
  }
}
export default MeuPost2