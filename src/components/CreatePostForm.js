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
      return (
        <div className='createForm todoForm'>
          <button class="btn btn-info btn-lg btn3d" type="button" name="signin" data-toggle="modal" data-target="#newPost">Create New Post</button>
          <div class="modal fade" id="newPost" role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close"
                       data-dismiss="modal">
                      <span aria-hidden="true">&times;</span>
                      <span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel">Create New Post</h4>
                </div>
                <div class="modal-body">
                    <form role="form">
                      <div class="form-horizontal">
                        <div class="form-group">
                          <div class="col-md-12">
                            <textarea class="form-control" rows="1" placeholder="Post Title" required></textarea>
                          </div>
                        </div>
                      </div>
                      <div class="form-horizontal">
                        <div class="form-group">
                          <div class="col-md-12">
                            <textarea class="form-control" rows="5" placeholder="Write post details..." required></textarea>
                          </div>
                        </div>
                      </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal"> Close </button>
                </div>
            </div>
          </div>
        </div>
          <form onSubmit={event => this.onFormSubmit(event)}>
            <input
              onChange={event => this.onInputChange(event)}
              placeholder='Write a todo here ...'
              type='text'
              value={this.state.todo} />
          </form>
        </div>
      )
    )
  }
}

export default CreatePostForm
