import React, {Component} from 'react'
import editicon from '../images/editicon.png'
import searchButton from '../images/searchicon.png'
import personalIcon from '../images/icon.jpg'


class ProfileContainer extends Component{
  render() {
    return(
    <div>
    <div className="search">
      <input type="text" className="searchTerm" placeholder="What are you looking for?"/>
      <button type="submit" className="searchButton btn btn-secondary" ><img src={searchButton} alt=""/>
      </button>
    </div>

    <div className="profileBody">
      <div className="profileBody-left">
        <h1>Welcome, <span>username!</span></h1>
        <div className="userName">
          <h4>Name: Name </h4>
          <img className="editicon" src={editicon} alt=""/>
        </div>
        <div className="currentCity">
          <h4>Current City: Current City </h4>
          <img className="editicon" src={editicon} alt=""/>
        </div>
        <div className="joinDate">
          <h4>Join Date: Join Date </h4>
          <img className="editicon" src={editicon} alt=""/>
        </div>
      </div>
      <div className="profileBody-right">
        <img className="personalIcon" src={personalIcon} alt=""/>
        <img className="personalEditicon" src={editicon} alt=""/>
      </div>
    </div>

    <div className="posts">
      <h1>Posts</h1>

      <div className="post">
        <h3>Post Date: Post Title</h3>
        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
      </div>

      <div className="post">
        <h3>Post Date: Post Title</h3>
        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
      </div>

      <div className="post">
        <h3>Post Date: Post Title</h3>
        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
      </div>

      <div className="post">
        <h3>Post Date: Post Title</h3>
        <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </p>
      </div>
    </div>
  </div>

    )
  }
}

export default ProfileContainer
