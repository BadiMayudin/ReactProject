import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Texttransform(props) {

    const change = (event)=>{
        SetText(event.target.value);
    }
    const upper = ()=>{
        let newText = Text.to();
        SetText(newText)
    }
    const lower = ()=>{
        let newText = Text.toLowerCase();
        SetText(newText)
    }
    const clear = ()=>{
        SetText(" ")
    }
    const removeSpace = ()=>{
      let rspace = Text.split(/[ ]+/);
      SetText(rspace);
    }
    const copy = ()=>{
      let copy = document.getElementById("box");
      copy.select();
      navigator.clipboard.writeText(copy.value
        )
    }
    const[Text, SetText] = useState();
  return (
    <>
       <nav className={`navbar navbar-expand-lg navbar-light bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active white" aria-current="page" href="/" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    <div className="container mt-5">
        <h1>{props.head}</h1>
        <textarea name="" id="box" cols="90" value = {Text} onChange={change} rows="5"  className='mt-5'></textarea><br />
        <button className='btn btn-warning mt-5' onClick={upper}>ToUpperCase</button>
        <button className='btn btn-warning mt-5 ms-5' onClick={lower}>ToLowerCase</button>
        <button className='btn btn-warning mt-5 ms-5' onClick={clear}>Clear</button>
        <button className='btn btn-warning mt-5 ms-5' onClick={removeSpace}>Remove Extra Space</button>
        <button className='btn btn-warning mt-5 ms-5' onClick={copy}>Copy</button>
    </div>
       <div className='container'>
       <h1 className='mt-5'>{props.pw }</h1>
        <p> {Text}</p>
       </div>
   
    </>
  )
}
Texttransform.propTypes  = {
  pw: PropTypes.string.isRequired
}










// <button className='btn btn-warning mt-5 ms-5' onClick={copy}>Copy</button>
{/* <button className='btn btn-warning mt-5 ms-5' onClick={space}>Remove Space</button> */}
// const copy = ()=>{
//   let box = document.getElementById("box");
//   box.select();
//   navigator.clipboard.writeText(box.value)
// }
// const space = ()=>{
//   let Newtext = Text.split(/[ ]+/)
//   SetText(Newtext.join(" "))
// }