import React from 'react'


import {withRouter} from 'react-router-dom'
import HomeOwner from './owner/HomeOwner';

function Home() {
  return (
    <div>
   
<nav class="navbar navbar-expand-lg navbar-light bg-light  navbar-dark bg-dark">
  <a class="navbar-brand" href="/">India's~Travel~Booking</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/search">Home <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item" >
        <a class="nav-link" href="/search">Search Buses</a>
      </li>

    
    
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
      More

        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/reg">Registration</a>
          <a class="dropdown-item" href="/login">Log-in</a>
         
        </div>
      </li>
      <li class="nav-item" >
        <a class="nav-link"  
          href="/"
          onClick={() => {
            // localStorage.removeItem("jwt");
            // localStorage.removeItem("adminRole");
            // sessionStorage.removeItem("jet");
            // sessionStorage.removeItem("adminRole");
            localStorage.clear();
          }}
        
        >Log-Out</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default withRouter(Home);