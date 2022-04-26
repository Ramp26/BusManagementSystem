import React from 'react'
import {withRouter} from 'react-router-dom'
function Search() {
  return (
    <div>

<form class="col-md-4 mb-3 m-auto mt-5" style={{border:'1px solid blue',boxShadow:'0 5px 0 3px blue'}} >

<div class="form-group">
    <label for="exampleInputPassword1">From Place</label>
    <input type="text" class="form-control" id="exampleInputPassword1" />
</div>

<div class="form-group">
    <label for="exampleInputPassword1">To Place</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
</div>


<button type="submit" class="btn btn-primary">Search</button>
</form>


    </div>
  )
}


export default withRouter(Search)