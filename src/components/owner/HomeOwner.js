import React from 'react'
import { withRouter } from 'react-router-dom'


function HomeOwner() {
  return (
    <div>
     
<nav class="navbar navbar-light bg-primary">
  <a class="navbar-brand" href="/ownertabledata">
    <img src="/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
     Owners Home
  </a>
</nav>

    </div>
  )
}

export default withRouter(HomeOwner)