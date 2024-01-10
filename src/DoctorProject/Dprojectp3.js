import React from 'react'
import './DfirstProject.css'

const Dprojectp3 = (props) => {
  return (
    <div className='contant-p1'>
        <div className="cHead">
          <h1>{props.cHead1}</h1>
        </div>
        <div className="mainContant">
       
          <div id="left">
            <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div id="right">
            <h3>{props.rfHead}</h3>
            <h5>{props.rfname}</h5>
            <p>{props.details} </p>
            <button>{props.rButton}</button>
          </div>
          </div>
          <div className="mainContant">
       
       <div id="left1">
       <h3>{props.rfHead}</h3>
         <h5>{props.rfname1}</h5>
         <p>{props.details} </p>
         <button>{props.rButton}</button>
               </div>
       <div id="right1" >
       <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

       </div>
       </div>
       <div className="mainContant">
       
       <div id="left">
         <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
       <div id="right">
         <h3>{props.rfHead}</h3>
         <h5>{props.rfname}</h5>
         <p>{props.details} </p>
         <button>{props.rButton}</button>
       </div>
       </div>
       <div className="mainContant">
    
    <div id="left1">
    <h3>{props.rfHead}</h3>
      <h5>{props.rfname1}</h5>
      <p>{props.details} </p>
      <button>{props.rButton}</button>
            </div>
    <div id="right1" className='rf' >
    <img src="https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

    </div>
    </div>
    </div>
  )
}

export default Dprojectp3
