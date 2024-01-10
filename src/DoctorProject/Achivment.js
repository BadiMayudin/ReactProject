import React from 'react'
import './Achivment.css'
const Achivment = (props) => {
  return (
    <div className='achivment'>
        <div className="aHead">
        <i class="ri-trophy-line"></i><h2>{props.achivment}</h2>
        </div>
        <div className="aMain">
            <div className="aLeft">
                <button>{props.aLeftOne}</button>
                <button>{props.aLeftTwo}</button>
                <button className='twotan'>{props.aLeftThree}</button>
            </div>
            <div className="aMid">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>  
            </div>
            <div className="aRight">
                <p><b>{props.aRightContant}</b></p>
                <p><b>{props.aRightContant}</b></p>
                <p><b>{props.aRightContant}</b></p>
            </div>
        </div>
    </div>
  )
}

export default Achivment
