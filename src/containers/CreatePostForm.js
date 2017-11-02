import React, {Component} from 'react'

class CreatePostForm extends Component {
  constructor(){
    super()
    this.state = {
      post:''
    }
  }
  onInputChange(event){
    this.setState({
      post: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    let post = this.state.post
    this.props.createPost(post)
    this.setState({
      post: ''
    })
  }
  render(){
    return (
      ADD ALL THE THINGS HERE
    )
  }
}
