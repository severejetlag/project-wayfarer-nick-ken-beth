import React from 'react'
import { Route } from 'react-router'
import HomeContainer from './containers/HomeContainer'

import CitiesContainer from './containers/CitiesContainer'

import ProfileContainer from './containers/ProfileContainer'



var routes = (
	<div>
		<Route path ='/' component={HomeContainer} />

		<Route path ='/cities' component={CitiesContainer} />

		<Route path ='/profile' component={ProfileContainer} />

	</div>
)


export default routes;
