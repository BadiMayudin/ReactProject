import React from 'react'
import './Dsfooter.css'

const Dsfooter = (props) => {
    let myStyle={
        color:"black"
    }
  return (
    <div className="main">
         <div className='firstLeft'>
        <div className="flHead">
        <i class="ri-award-fill"></i> <h1>{props.skill}</h1>
        </div>
        <div className="flhButtons1">
            <button>{props.button1}</button>
            <button>{props.button2}</button>
            <button>{props.button3}</button>
        </div>
        <div className="flhButtons1">
            <button>{props.button4}</button>
            <button>{props.button5}</button>
            <button>{props.button6}</button>
        </div>
        <div className="flhButtons1">
            <button>{props.button7}</button>
            <button>{props.button8}</button>
            <button>{props.button9}</button>
        </div>
    </div> 
    <div className="firstRight">
        <div className="frHead">
        <i className="ri-printer-cloud-fill"></i><h2>{props.heading2}</h2>
        </div>
        <div className="fmain">
        <div className="frconLeft">
            <h5>{props.fmainfHead}</h5>
            <h5 className='run'>{props.fSmallHead}</h5>
            <h5>{props.fmainsHead}</h5>
            <h5 className='run'>{props.fmaintHead}</h5>
            <h5>{props.fmainFourHead}</h5>
            <h5 className='run'>{props.fmainFiveHead}</h5>
        </div>
        <div className="frconMid">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>  
        </div>
        <div className="frRight">
            <p style={myStyle}><b>{props.fmainContant}</b></p>
            <p className='lorem'>{props.fmainSecondContant}</p>
            <p style={myStyle}><b>{props.fmainContant}</b></p>
            <p className='lorem'>{props.fmainSecondContant}</p>
            <p style={myStyle}><b>{props.fmainContant} </b></p>
            <p className='lorem'>{props.fmainSecondContant}</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Dsfooter
