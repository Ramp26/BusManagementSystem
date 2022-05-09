
import axios from 'axios';
import React, { useState } from 'react'

import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
function AddBus(props) {


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
  
const toggle= props.showAdd
const settoggle=props.setshowAdd



  let addnew=(e)=>{
    setbusdata({
      ...busdata,
      [e.target.name]:e.target.value,
    })

  }


  const handleOpen=()=>{
    settoggle(true)
  }


  const handleColse=()=>{
    settoggle(false)
  }




const saveData=async()=>{
try{
  const token=localStorage.getItem("jwt");
  console.log(token)

  let token1=JSON.parse(token);

  let jwtToken=`Bearer ${token1}`


  let res = await axios.post(`http://localhost:8080/addbus/`,busdata,{headers:{'Authorization': jwtToken}});
  if(res.data.error){
      alert('something went wrong')
  }else{
      alert('inserted successfully')

      handleColse();
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
                  onChange={addnew}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="busFeature"
                  name="busFeature"
                  value={busdata.busFeature}
                  onChange={addnew}
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
                  onChange={addnew}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="fromPlace"
                  name="fromPlace"
                  value={busdata.fromPlace}
                  onChange={addnew}
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
                  onChange={addnew}
                />
              </Col>

              <Col>
                <Form.Control
                  placeholder="distance"
                  name="distance"
                  value={busdata.distance}
                  onChange={addnew}
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
                  onChange={addnew}
                />
              </Col>

              <Col>
                <Form.Control
                  placeholder="Showroom Price"
                  name="showroom_Price"
                  value={busdata.showroom_Price}
                  onChange={addnew}
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

export default AddBus