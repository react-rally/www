import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import App from 'App'
import About from 'screens/About'
import Conduct from 'screens/Conduct'
import Home from 'screens/Home'
import Proposals from 'screens/Proposals'
import Schedule from 'screens/Schedule'
import Speakers from 'screens/Speakers'
import Sponsors from 'screens/Sponsors'
import Venue from 'screens/Venue'
import ga from 'helpers/googleAnalytics'
import styles from './assets/css/styles.scss'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page that you are looking for could not be found.</p>
      <p>While you're here, why not <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">watch a video</a> of our favorite talk from last year?</p>
    </div>
  )
}

ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/conduct" component={Conduct}/>
      <Route path="/schedule" component={Proposals}/>
      <Route path="/speakers" component={Proposals}/>
      <Route path="/sponsors" component={Sponsors}/>
      <Route path="/venue" component={Venue}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('container'))
