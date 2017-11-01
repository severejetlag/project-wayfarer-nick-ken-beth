import React from 'react'
import { Route } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import ProfileContainer from './containers/ProfileContainer'


var routes = (
	<div>
		<Route path ='/' component={HomeContainer} />
		<Route path ='/profile' component={ProfileContainer} />
	</div>
)


export default routes;
