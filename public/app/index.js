import React from 'react'
import { render } from 'react-dom'
import { Route, Router, IndexRoute, browserHistory, hashHistory } from 'react-router'

//components
import Main from './components/Main'
import NotFound from './components/NotFound'
import Timer from './components/Timer'
import Countdown from './components/Countdown'

//load foundation
import 'style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'

//custom styles
import 'style-loader!css-loader!sass-loader!./styles/style.scss'

const app = document.getElementById('app')

render(
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Timer}/>
			<Route path="countdown" component={Countdown}/>
		</Route>
		<Route path="*" component={NotFound} />
	</Router>,
	app
	)
