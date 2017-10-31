import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {Link} from 'react-router';
import HeaderContainer from './containers/headerContainer'


class Home extends Component {
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
        <HeaderContainer/>
        </div> 
      </div>
    );
  }
}

export default Home;
