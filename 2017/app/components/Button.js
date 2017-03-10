import React from 'react'

export default (props) => {
  return (
    <a href={props.href} target="_blank" className={"Button " + props.className}>
      {props.children}
    </a>
  )
}
