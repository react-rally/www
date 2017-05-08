import React from 'react'

export default (props) => {
  return (
    <div
      className={'Card' + (props.className ? ' ' + props.className : '')}
    >
      {props.children}
    </div>
  )
}
