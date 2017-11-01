import React, {Component} from 'react'
import slider1 from '../images/welcome.jpg'
import slider2 from '../images/welcome2.png'
import slider3 from '../images/welcome3.jpg'

class HomeContainer extends Component{

	render(){
		return(

				<div className="welcomeImage">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" className="active"></li>
							<li data-target="#myCarousel" data-slide-to="1"></li>
							<li data-target="#myCarousel" data-slide-to="2"></li>
						</ol>

						<div className="carousel-inner">

							<div className="item active">
								<img src={slider1} alt=""/>
								<div className="carousel-caption">
								</div>
							</div>

							<div className="item">
								<img src={slider2} alt=""/>
								<div className="carousel-caption">
								</div>
							</div>

							<div className="item">
								<img src={slider3} alt=""/>
								<div className="carousel-caption">
								</div>
							</div>

						</div>

						<a className="left carousel-control" href="#myCarousel" data-slide="prev">
							<span className="glyphicon glyphicon-chevron-left"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="right carousel-control" href="#myCarousel" data-slide="next">
							<span className="glyphicon glyphicon-chevron-right"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>

				<div className="topics">

					<div className="title">
						<h1>Galavant is ...</h1>
					</div>

					<div className="topic topic1">
						<h2>Topic</h2>
						<p>We are the Best Team!!!!!</p>

					</div>

					<div className="topic topic2">
						<h2>Topic</h2>
						<p>Oh Yes We Are!!!!</p>

					</div>

					<div className="topic topic3">
						<h2>Topic</h2>
						<p>Ran Out Of Words!!!!!</p>

					</div>

				</div>

		</div>
		)
	}
}

export default HomeContainer
