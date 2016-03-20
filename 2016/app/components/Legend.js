import React from 'react'

export default (props) => {
  return (
    <div className="Legend">
      <div></div>
      <div>{props.children}</div>
    </div>
  )
}
