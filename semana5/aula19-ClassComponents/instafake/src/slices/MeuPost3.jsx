import React from 'react';
import Post from '../components/Post';
import Haru3 from '../images/Haru3.jpg';
import Haru4 from '../images/haru4.png';

class MeuPost3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Post
        avatar={{ name: "Haru - Dog Influencer", avatar: Haru4 }}
        image={Haru3}
        likeCounter={0}
        commentCounter={0}
      />
    )
  }
}
export default MeuPost3