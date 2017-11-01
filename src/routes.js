import React from 'react'
import { Route } from 'react-router'
import HomeContainer from './containers/HomeContainer'
import CitiesContainer from './containers/CitiesContainer'

var routes = (
	<div>
		<Route path ='/' component={HomeContainer} />
		<Route path ='/cities' component={CitiesContainer} />
	</div>
)


export default routes;
