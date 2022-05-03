import axios from 'axios';
import React, { useEffect, useState } from 'react'

function EditBus(props) {

    const [busdata, setbusdata] = useState(
        {

         busName:"",
         busFeature:"",
         busFacility:"",
         fromPlace:"",
          toPlace:"",
         charges:"",
         distance:"",
         userName:"",
      
      });


      useEffect(() => {
       
      setbusdata(props.selected);   
       
      }, [props.selected])
      

let update=(e)=>{
    setbusdata({
        ...busdata,
        [e.target.name]:e.target.value
      })
}


let saveData=async()=>{
    try{

    let token=localStorage.getItem("jwt")
    let jwtToken=`Bearer ${token}`


    let res = await axios.put(`http://localhost:8080/edit/${busdata.busId}`,busdata,{headers:{'Authorization': jwtToken}});
    if(res.data.error){
        alert('something went wrong')
    }else{
        alert('updated successfully')

        props.setshowedit(false)
        setbusdata({
            busName:"",
            busFeature:"",
            busFacility:"",
            fromPlace:"",
             toPlace:"",
            charges:"",
            distance:"",
            userName:"",

        })
    }
}catch(err){
        console.log(err)

    };


}


  return (
    <div>
    <div className="modal fade" id="exampleModal"  tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" show={props.showedit}   >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header"  >
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{props.setshowedit(false)}}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body mb-3">
<div className="row mb-3">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name"  name='busName' value={busdata.busName}  onChange={update}/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" name='busFeature' value={busdata.busFeature} onChange={update} />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name" name='busFacility' value={busdata.busFacility} onChange={update} />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" value={busdata.charges} name='charges' onChange={update} />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name" value={busdata.distance} name='distance' onChange={update} />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" value={busdata.fromPlace} name='fromPlace' onChange={update} />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name" value={busdata.toPlace} name='toPlace' onChange={update} />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" value={busdata.userName} name='userName' onChange={update} />
    </div>
  </div>

            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{props.setshowedit(false)}}>Close</button>
            <button type="button" className="btn btn-primary" onClick={()=>{saveData()}}>Save changes</button>
          </div>
        </div>
      </div>
    </div>

</div>
  )
}

export default EditBus