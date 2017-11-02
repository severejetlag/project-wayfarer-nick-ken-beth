import React, {Component} from 'react'
import CreatePostForm from '../components/CreatePostForm.js'
import PostModel from '../models/PostModel'

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.state ={
      posts: []
    }

    this.createPost = this.createPost.bind(this)
  }

  createPost(taco) {
    let newPost = {
      title: taco.postTitle,
      body: taco.post
    }
    console.log("I'm a NEW POST: ", taco);
    PostModel.create(newPost)
    .then(res => {
      let posts = this.state.posts
      let newPosts = posts.push(res.data)
      this.setState({newPosts})
    })
  }

  render() {
    return(
      <div>
        <CreatePostForm words={"HELLO"} createPost={this.createPost}/>
      </div>
    )

  }
}

export default PostContainer
