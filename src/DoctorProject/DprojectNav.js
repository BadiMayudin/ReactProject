import React from 'react'
import './DfirstProject.css'

const DprojectNav = (props) => {
  return (
    <div className='nav'>
        <h2>{props.title}<span>{props.tspan}</span></h2>

        <div className="anchor">
          <a href="/" className='home'>{props.a1}</a>
          <a href="/">{props.a2}</a>
          <a href="/">{props.a3}</a>
          <a href="/">{props.a4}</a>
        </div>
    </div>
  )
}

export default DprojectNav
