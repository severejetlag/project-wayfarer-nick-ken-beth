import React, {Component} from 'react'
import CreatePostForm from '../components/CreatePostForm.js'

class PostContainer extends Component {
  constructor() {
    super()
    this.state =
      posts: []
  }
  render() {
    <div>
      <CreatePostForm />
    </div>
    createPost(post) {
      let newPost = {
        title: postTitle,
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
