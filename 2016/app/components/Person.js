import React from 'react'
import Avatar from 'components/Avatar'
import Icon from 'components/Icon'

export default (props) => {
  return (
    <div className="Person">
      <Avatar url={props.avatar} size={200}/>
      <b>{props.name}</b><br/>
      <em>{props.title}</em>
      <div className="Person__Social">
      {props.twitter && (
        <Icon href={`https://twitter.com/${props.twitter}`} type="twitter"/>
      )}
      {props.github && (
        <Icon href={`https://github.com/${props.github}`} type="github"/>
      )}
      </div>
    </div>
  )
}

