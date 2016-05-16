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
        <Icon href={`https://twitter.com/${props.twitter}`} type="twitter"/>
        <Icon href={`https://github.com/${props.github}`} type="github"/>
      </div>
    </div>
  )
}
