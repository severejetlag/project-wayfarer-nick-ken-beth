import React, { Component } from 'react';
import {Router, browserHistory} from 'react-router'
import routes from './routes.js'
import {Link} from 'react-router';
import HeaderContainer from './containers/headerContainer'
import ModalContainer from './containers/ModalContainer'
import ProfileContainer from './containers/ProfileContainer'
import AuthModel from './models/AuthModel'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      isAuthed: false
    }
  }
  handleUsernameInput(event){
    event.preventDefault()
    this.setState({username: event.target.value})
  }
  handlePasswordInput(event){
    event.preventDefault()
    this.setState({password: event.target.value})
  }

  handleLoginSubmit(event){
    event.preventDefault()
    let authData = {
      username: this.state.username,
      password: this.state.password
    }
    AuthModel.login(authData).then((res) => console.log(res))
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <HeaderContainer
            isAuthed={this.state.isAuthed}
          />
          <main>
            <Router routes = {routes} history={browserHistory}/>
          </main>
          <ModalContainer
            handleLoginSubmit={this.handleLoginSubmit.bind(this)}
            handleUsernameInput={this.handleUsernameInput.bind(this)}
            handlePasswordInput={this.handlePasswordInput.bind(this)}
          />
        </div>
      </div>
    );
  }
}





export default App;
