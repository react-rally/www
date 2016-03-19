import React, { Component } from 'react'

export default (props) => {
  return (
    <div className="Avatar">
      <img src={"https://avatars2.githubusercontent.com/u/199035?v=3&s=" + (props.size || 200)}/>
      <b>{props.name}</b><br/>
      <em>{props.title}</em>
    </div>
  )
}
