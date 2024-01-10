import React from 'react'
import './DsHero.css'
const Dsp3 = (props) => {
  return (
    <>
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
    rel="stylesheet"
/>
       <div className="mainContant">
       
       <div id="left">
         <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
       </div>
       <div id="right">
         <h3>{props.rfHead}</h3>
         <h5>{props.rfname}</h5>
         <p>{props.details}</p>
         <p>{props.details}</p>
         <div id="elem">
         <i class="ri-contacts-fill"></i> <h5>9313780325</h5>
         </div>
       </div>
       </div>
    </>
  )
}

export default Dsp3
