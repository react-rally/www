import React from 'react'
import Icon from 'components/Icon'

export default (props) => {
  let size = props.size || 200
  return (
    <div className="Avatar">
      <img src={props.url} className="Avatar__Image" style={{width: size, height: size}}/>
      <b>{props.name}</b><br/>
      <em>{props.title}</em>
      <div className="Avatar__Social">
        <Icon href={props.twitter} src="assets/img/twitter.png" className="Icon--twitter"/>
        <Icon href={props.github} src="assets/img/github.png" className="Icon--github"/>
      </div>
    </div>
  )
}
