    import React, { useState } from 'react'

    export default function Darkmode() {

        const[myStyle , SetMyStyle] = useState({
            color:"black",
            backgroundColor:"white"
        })
        const[text , SetText] = useState("Enable Dark Mode");

        const Darkmode = ()=>{
            if(myStyle.color == "black"){
                SetMyStyle({
                    color:"white",
                    backgroundColor:"black"
                })
                SetText("Enable Light Mode")
            }else{
                SetMyStyle({
                    color:"black",
                    backgroundColor:"white"
                    
                })
                SetText("Enable Dark Mode")

            }
        }
    return (
    <>
        <nav class="navbar navbar-expand-lg  navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
    </nav>
    <div className='container mt-5'>
    <div id="accordion">

<div class="card" style={myStyle}>
  <div class="card-header">
    <a class="btn" data-bs-toggle="collapse" href="#collapseOne" style={myStyle}>
      Collapsible Group Item #1
    </a>
  </div>
  <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
    <div class="card-body">
      Lorem ipsum..
    </div>
  </div>
</div>

<div class="card" style={myStyle}>
  <div class="card-header">
    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseTwo" style={myStyle}>
      Collapsible Group Item #2
    </a>
  </div>
  <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
    <div class="card-body">
      Lorem ipsum..
    </div>
  </div>
</div>

<div class="card" style={myStyle}>
  <div class="card-header">
    <a class="collapsed btn" data-bs-toggle="collapse" href="#collapseThree" style={myStyle}>
      Collapsible Group Item #3
    </a>
  </div>
  <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
    <div class="card-body">
      Lorem ipsum..
    </div>
  </div>
</div>

</div>

        <button className='btn btn-primary mt-5 ms-5' onClick={Darkmode}>{text}</button>

    </div>
     </>
    )
    }
