import React from 'react'
import './DfirstProject.css'

const Dhero = (props) => {
  return (
    <div className='hero'>
        <h5>{props.hsmallHead}</h5>
        <h1>{props.hTopHead}</h1>
        <h1>{props.hSecondHead}</h1>
        <button>{props.btnText}</button>
    </div>
  )
}

export default Dhero
