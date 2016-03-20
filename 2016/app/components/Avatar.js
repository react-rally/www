import React, { Component } from 'react'

export default (props) => {
  let size = props.size || 200
  return (
    <div className="Avatar">
      <img src={props.url} style={{width: size, height: size}}/>
      <b>{props.name}</b><br/>
      <em>{props.title}</em>
    </div>
  )
}
