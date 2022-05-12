import axios from 'axios'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
function Search() {

  const [busData, setbusData] = useState({

    fromPlace: "",
    toPlace: ""

  })

  const [searchedData, setsearchedData] = useState([])

  let handleChange = (e) => {
    setbusData({
      ...busData,
      [e.target.name]: e.target.value
    })
  }

  console.log("-=-=-=-=-=-=-=", busData)

  let searchData = async () => {

    let res = await axios.get("http://localhost:8080/search", busData);
    console.log("------------->ninu", res.data)
    console.log(res, "=========>nanu");

    setsearchedData([res.data]);

  }

  console.log("-==--=-----=-===-=", searchedData);





  return (
    <div>

      <form class="col-md-4 mb-3 m-auto mt-5" style={{ border: '1px solid blue', boxShadow: '0 5px 0 3px blue' }} >

        <div class="form-group">
          <label for="exampleInputPassword1">From Place</label>
          <input type="text" class="form-control" id="exampleInputPassword1" name='fromPlace' value={busData.fromPlace} onChange={(e) => { handleChange(e) }} />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">To Place</label>
          <input type="text" class="form-control" id="exampleInput" name='toPlace' value={busData.toPlace} onChange={(e) => { handleChange(e) }} />
        </div>


        <button type="submit" class="btn btn-primary" onClick={searchData}>Search</button>
      </form>


    </div>
  )
}


export default withRouter(Search)