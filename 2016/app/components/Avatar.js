import React from 'react'

export default (props) => {
  let size = props.size || 200
  return (
    <img src={props.url} className="Avatar" style={{
      width: size,
      height: size,
      borderRadius: size / 2
    }}/>
  )
}
