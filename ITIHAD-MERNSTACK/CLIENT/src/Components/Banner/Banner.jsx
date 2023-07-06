import React from 'react'
import "./Banner.css"
function Banner({title ,className}) {
  return (
    <div className={className}>
       <h1>{title}</h1>
    </div>
  )
}

export default Banner