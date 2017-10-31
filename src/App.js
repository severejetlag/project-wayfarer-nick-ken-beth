import React, { Component } from 'react';
import {Router, browserHistory} from 'react-router'
import routes from './routes.js'
import {Link} from 'react-router';
import HeaderContainer from './containers/headerContainer'
import ModalContainer from './containers/ModalContainer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '', 
      password: '',
      isAuthed: false
    }
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <HeaderContainer 
            isAuthed={this.state.isAuthed}
          />
          <main>
            <Router routes = {routes} history={browserHistory}/>,
          </main>
          <ModalContainer/>
        </div> 
      </div>
    );
  }
}





export default App;
