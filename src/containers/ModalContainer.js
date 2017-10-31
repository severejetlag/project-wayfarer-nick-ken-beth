import React, {Component} from 'react'

class ModalContainer extends Component{
	render(){
		return(
			<div className="modal fade" id="myModalSignIn" role="dialog">
	      <div className="modal-dialog">
	        <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close"
                   data-dismiss="modal">
                 <span aria-hidden="true">&times;</span>
                 <span className="sr-only">Close</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">
                    Sign In
                </h4>
            </div>

            <div className="modal-body">
              <form role="form">
                <div className="form-group">
                  <label htmlFor="inputUsername">Username</label>
                    <input type="text" className="form-control"
                    id="inputUsername" placeholder="Enter Username"/>
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control"
                        id="inputPassword" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>


            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-default"
                        data-dismiss="modal">
                            Close
                </button>
            </div>
        </div>
      </div>
    </div>
		)
	}
}

export default ModalContainer