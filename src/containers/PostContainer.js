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

  createPost(fullPost) {
    console.log("post body: "+fullPost.postBody)
    PostModel.create(fullPost)
    .then(res => {
      console.log(res);
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
