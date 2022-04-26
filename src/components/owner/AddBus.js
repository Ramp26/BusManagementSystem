
import React, { useState } from 'react'


function AddBus(props) {


  const [busdata, setbusdata] = useState(
    {
  
    busId:"",
     busName:"",
     busFeature:"",
     busFacility:"",
     fromPlace:"",
      toPlace:"",
     charges:"",
     distance:"",
     userName:"",
  
  });
  


  return (
    <div>

     
     

        <div className="modal fade" id="exampleModal"  tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" show={props.showAdd}   >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header"  >
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>{props.setshowAdd(false)}}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body mb-3">
  <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
      </div>

                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>{props.setshowAdd(false)}}>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default AddBus