import React, {Component} from 'react'
import searchButton from '../images/searchicon.png'
import CreatePostForm from '../components/CreatePostForm.js'

class CitiesContainer extends Component{
	render(){
		return(
			<div>
				<div className="search">
					<input type="text" className="searchTerm" placeholder="What are you looking for?" />
					<button type="submit" className="searchButton btn btn-secondary" ><img src={searchButton} alt="" />
					</button>
				</div>
								<div className="col-md-3 city-list">
										<div className="city-list-header">
											<h3>Cities</h3>
										</div>
										<div className="city">
											<img src="http://freedesignfile.com/upload/2013/11/310615.jpg"/>
											<h4>San Francisco</h4>
										</div>
										<div className="city">
											<img src="http://freedesignfile.com/upload/2013/11/310615.jpg"/>
											<h4>Hong Kong</h4>
										</div>
										<div className="city">
											<img src="http://freedesignfile.com/upload/2013/11/310615.jpg"/>
											<h4>London</h4>
										</div>
								</div>
								<div className="col-md-9 selected-city">
									<div className="selected-city-header">
											<div className="col-md-6 selected-city-name">
												<h1>San Francisco</h1>
												<h3>United States</h3>
											</div>
											<img className="col-md-6 selected-city-img"src="http://www.capoliticalreview.com/wp-content/uploads/2014/11/San-Francisco.jpg" height="250"/>
										</div>
									<div className="button-left">
										<CreatePostForm />
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
					</div>
		)
	}
}

export default CitiesContainer
