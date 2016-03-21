import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from 'App'
import About from 'screens/About'
import Conduct from 'screens/Conduct'
import Home from 'screens/Home'
import Proposals from 'screens/Proposals'
import Schedule from 'screens/Schedule'
import Speakers from 'screens/Speakers'
import Sponsors from 'screens/Sponsors'
import Venue from 'screens/Venue'
import styles from './assets/css/styles.scss'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/conduct" component={Conduct}/>
      <Route path="/schedule" component={Proposals}/>
      <Route path="/speakers" component={Proposals}/>
      <Route path="/sponsors" component={Sponsors}/>
      <Route path="/venue" component={Venue}/>
    </Route>
  </Router>
), document.getElementById('container'))
