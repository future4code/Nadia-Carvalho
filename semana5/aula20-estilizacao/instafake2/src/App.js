import React from 'react';
import './App.css';
import PageSection from './components/PageSection'
import Post from './components/Post'
import AddPost from './components/AddPost'
import styled from 'styled-components'

const PostList = styled.ul``
const EmptyList = styled.p``

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      postList: [
        {
          avatar : { name: "Nadia Carvalho", avatar: "https://instagram.fbfh10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/38854418_223866048285002_8727552044312821760_n.jpg?_nc_ht=instagram.fbfh10-1.fna.fbcdn.net&_nc_ohc=TAowo-LHW2sAX9MBNQG&oh=3fbb4f6ea68c86c1aad25d6226c14e61&oe=5ECCC929"},
          image: "https://instagram.fbfh10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/75419811_117303746394627_637875768740620026_n.jpg?_nc_ht=instagram.fbfh10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Xc9Ck_FPgPcAX_-Cj0I&oh=bcf994faa1cd9fc20edc5a3e9f581289&oe=5ED131D7"
        },
        {
          avatar : { name: "Nadia Carvalho", avatar: "https://instagram.fbfh10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/38854418_223866048285002_8727552044312821760_n.jpg?_nc_ht=instagram.fbfh10-1.fna.fbcdn.net&_nc_ohc=TAowo-LHW2sAX9MBNQG&oh=3fbb4f6ea68c86c1aad25d6226c14e61&oe=5ECCC929"},
          image: "https://instagram.fbfh10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/75419811_117303746394627_637875768740620026_n.jpg?_nc_ht=instagram.fbfh10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Xc9Ck_FPgPcAX_-Cj0I&oh=bcf994faa1cd9fc20edc5a3e9f581289&oe=5ED131D7"
        },
        {
          avatar : { name: "Nadia Carvalho", avatar: "https://instagram.fbfh10-1.fna.fbcdn.net/v/t51.2885-19/s150x150/38854418_223866048285002_8727552044312821760_n.jpg?_nc_ht=instagram.fbfh10-1.fna.fbcdn.net&_nc_ohc=TAowo-LHW2sAX9MBNQG&oh=3fbb4f6ea68c86c1aad25d6226c14e61&oe=5ECCC929"},
          image: "https://instagram.fbfh10-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/75419811_117303746394627_637875768740620026_n.jpg?_nc_ht=instagram.fbfh10-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Xc9Ck_FPgPcAX_-Cj0I&oh=bcf994faa1cd9fc20edc5a3e9f581289&oe=5ED131D7"
        }
      ]
    }
  }

  onAddPost = (post) => {
    const newPost = {
      avatar: { name: post.user, avatar: post.avatar},
      image: post.image
    }
    this.setState({
      postList: [...this.state.postList, newPost]
    })
  }

  render() {

    let content = this.state.postList.map((post, idx) => {
      return (
        <Post 
          key={idx}
          avatar={{ name: post.avatar.name, avatar: post.avatar.avatar }}
          image={post.image}
          likeCounter={post.likeCounter || 0}
          commentCounter={post.commentCounter || 0}
        />
      )
    })

    if (content.length === 0) {
      content = <EmptyList>Nenhum post no momento!</EmptyList>
    }

    return (
      <PageSection className="App">
        <AddPost onAddPost={this.onAddPost} />
        <PostList>{content}</PostList>
      </PageSection>
    );
  }
}

export default App;
