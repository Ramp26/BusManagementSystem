import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

function EditBus(props) {


  const toggle= props.showedit
const settoggle=props.setshowedit
    const [busdata, setbusdata] = useState({
      busName:"",
      busFeature:"",
      busFacility:"",
      fromPlace:"",
       toPlace:"",
      charges:"",
      distance:"",
      userName:"",

  });


      const handleOpen=()=>{
        settoggle(true)
      }
    
    
      const handleColse=()=>{
        settoggle(false)
      }
    
      useEffect(() => {
       
      setbusdata(props.selected);   
       
      }, [props.selected])
      

let update=(e)=>{
    setbusdata({
        ...busdata,
        [e.target.name]:e.target.value
      })
}

console.log(busdata)
let saveData=async()=>{
    try{

    let token=localStorage.getItem("jwt")
    let token1=JSON.parse(token);
    let jwtToken=`Bearer ${token1}`


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
    <Modal
     show={toggle}
     onHide={handleColse}
     backdrop="static"
     keyboard={false}
   >
     <Modal.Header closeButton>
       <Modal.Title>Modal title</Modal.Title>
     </Modal.Header >
     <Modal.Body>
     <Form>
         <Row>
           <Col>
             <Form.Control
               placeholder="bus Name"
               name="busName"
               value={busdata.busName}
               onChange={update}
             />
           </Col>
           <Col>
             <Form.Control
               placeholder="busFeature"
               name="busFeature"
               value={busdata.busFeature}
               onChange={update}
             />
           </Col>
         </Row>
         <br />
         <Row>
           <Col>
             <Form.Control
               placeholder="busFacility"
               name="busFacility"
               value={busdata.busFacility}
               onChange={update}
             />
           </Col>
           <Col>
             <Form.Control
               placeholder="fromPlace"
               name="fromPlace"
               value={busdata.fromPlace}
               onChange={update}
             />
           </Col>
         </Row>
         <br />
         <Row>
           <Col>
             <Form.Control
               placeholder=" toPlace"
               name="toPlace"
               value={busdata.toPlace}
               onChange={update}
             />
           </Col>

           <Col>
             <Form.Control
               placeholder="distance"
               name="distance"
               value={busdata.distance}
               onChange={update}
             />
           </Col>
         </Row>
         <br />
         <Row>
         <Col>
             <Form.Control
               placeholder="userName"
               name="userName"
               value={busdata.userName}
               onChange={update}
             />
           </Col>

           <Col>
             <Form.Control
               placeholder="Showroom Price"
               name="showroom_Price"
               value={busdata.showroom_Price}
               onChange={update}
             />
           </Col>
         </Row>
         <br />
        
         <br />
         
         
       </Form>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleColse}>
         Close
       </Button>
       <Button variant="primary" onClick={()=>{saveData()}}>Submit</Button>
     </Modal.Footer>
   </Modal>
 </div>
  )
}

export default EditBus