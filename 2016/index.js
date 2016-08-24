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
import Stream from 'screens/Stream'
import Venue from 'screens/Venue'
import ga from 'helpers/googleAnalytics'
import styles from './assets/css/styles.scss'

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page that you are looking for could not be found.</p>
      <p>While you're here, why not <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">watch a video</a> of our favorite talk from last year?</p>
    </div>
  )
}

// Fix history
;(function () {
  const hash = location.hash
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect

  // Fix history for redirect coming from gh-pages 404.html
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect)
  }
  // Fix history for legacy hash history URLs
  else if (hash.trim().length !== 0) {
    history.replaceState(null, null, hash.replace('#', ''))
  }
})()

ReactDOM.render((
  <Router
    history={browserHistory}
    onUpdate={() => { window.scrollTo(0, 0) }}
  >
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/conduct" component={Conduct}/>
      <Route path="/schedule" component={Schedule}/>
      <Route path="/speakers" component={Speakers}/>
      <Route path="/sponsors" component={Sponsors}/>
      <Route path="/stream" component={Stream}/>
      <Route path="/venue" component={Venue}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('container'))
