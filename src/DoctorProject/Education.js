import React from 'react'
import './education.css'
const Education = (props) => {
  return (
    <>
      <div className='education'>
      <div className="frHead">
      <i className="ri-graduation-cap-line"></i><h2>{props.education}</h2>
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
            <p><b>{props.educationContant1} </b></p>
            <p className='lorem'>{props.educationContant2}</p>
            <p><b>{props.educationContant1} </b></p>
            <p className='lorem'>{props.educationContant2}</p>
            <p><b>{props.educationContant1}</b></p>
            <p className='lorem'>{props.educationContant2}</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Education
