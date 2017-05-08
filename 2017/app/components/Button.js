import React from 'react'

export default (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      className={'Button' + (props.className ? ' ' + props.className : '')}
      disabled={props.disabled}
    >
      {props.children}
    </a>
  )
}
