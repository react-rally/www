import React from 'react'

export default (props) => {
  return (
    <a href={props.href} target="_blank" className={`Icon ${props.className}`}>
      <img src={props.src}/>
    </a>
  )
}
