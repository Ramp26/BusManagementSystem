import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Route } from 'react-router-dom';
import AddBus from './AddBus';
import EditBus from './EditBus';

function OwnerTableData() {

    const [busdata, setbusdata] = useState();

    const [showAdd, setshowAdd] = useState(false);
    const [showedit, setshowedit] = useState(false);

    const [selected, setselected] = useState();
    
    useEffect( () => {
       first();
    }, []);
    
    
    let first= async()=>{
      let token = localStorage.getItem("jwt");
    
      let token1=JSON.parse(token);
    
      let jwtToken=`Bearer ${token1}`
      //converting and getting username from jwt token
      let userData = JSON.parse(atob(token.split(".")[1]));
      let userName = userData.sub;
    
      console.log("=========>",jwtToken);
      console.log("=========>",userName);
    
      let res = await axios.get(`http://localhost:8080/getallbuses/${userName}`,{ headers:{"Authorization": jwtToken} });

      if(res != null){
        setbusdata(res.data);
      }
    
     
      console.log(res.data, "i am res");
      console.log("busdata",busdata);
    }
    
    let showAddModal = () => {
      setshowAdd(false);
   
    };


    let updateData=(val)=>{
      setshowedit(true);
      setselected(val);
    }
    
  return (


<div>
      
      <div className="d-flex justify-content-end">
        <button
          style={{ margin: "20px" }}
          onClick={() => {
            setshowAdd(true);
          }}
        >
          Add Data
        </button>
      </div>
      <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Sl No</th>
      <th scope="col">Bus_ID</th>
      <th scope="col">Bus Name</th>
      <th scope="col">Bus Feature</th>
      <th scope="col">Bus Facility</th>
      
      <th scope="col">From Place</th>
      <th scope="col">To Place</th>
      <th scope="col">Distance</th>
      <th scope="col">Charges</th> 
      <th scope="col">Owner Name</th> 
        <th scope="col">ADD Bus</th>
    </tr>
  </thead>
  <tbody>
  {console.log("+++++++++++++++++++>",{busdata})}
    { busdata && busdata.map((val,idx) =>{
      console.log("==========>",val);
      return(
       <tr key={idx+1}> 
          <td>{idx+1}</td>
       <td>{val.busId}</td>
       <td>{val.busName}</td>
       <td>{val.busFeature}</td>
       <td>{val.busFacility}</td>
       <td>{val.fromPlace}</td>
       <td>{val.toPlace}</td>
       <td>{val.distance}</td>
       <td>{val.charges}</td>
       <td>{val.userName}</td>
       <td>
                  <button
                    style={{
                      margin: "2px",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                    }}
                    variant="success"
                    onClick={()=>{updateData(val)}}
                  >
                    Edit
                  </button>
                  <button
                    variant="primary"
                    // onClick={() => {
                    //   deleteData(val.carId);
                    // }}
                  >
                    Delete
                  </button>
                </td>


       </tr>
      )


     })}


  </tbody>
</table>

<AddBus showAdd={showAdd} setshowAdd={setshowAdd} />
<EditBus  showedit={showedit} setshowedit={setshowedit} selected={selected}/>

    </div>
    
  );
}

export default OwnerTableData;