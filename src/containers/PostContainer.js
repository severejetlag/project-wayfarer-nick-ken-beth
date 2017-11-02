import React, {Component} from 'react'
import CreatePostForm from '../components/CreatePostForm.js'

class PostContainer extends Component {
  render() {
    createPost(post) {
      let newPost = {
        body: post
      }
      PostModel.create(newPost).then((res) => {
        let posts = this.state.posts
        let newPosts = posts.push(res.data)
        this.setState({newPosts})
      })
    }
  }
}
