
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
  
  let addnew=(e)=>{
    setbusdata({
      ...busdata,
      [e.target.name]:e.target.value,
    })

  }


  return (
    <div>
       <Modal
        show={props.showadd}
        onHide={props.setshowadd}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header onClick={()=>{props.setshowAdd(false)}} closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header >
        <Modal.Body>
        <Form>
            <Row>
              <Col>
                <Form.Control
                  placeholder="Car Name"
                  name="carName"
                  value={busdata.busName}
                  onChange={addnew}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Company Name?"
                  name="companyName"
                  value={busdata.busFeature}
                  onChange={addnew}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  placeholder="Fuel Type"
                  name="fuelType"
                  value={busdata.busFacility}
                  onChange={addnew}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Power Steering (TRUE or FALSE)"
                  name="powerSteering"
                  value={busdata.fromPlace}
                  onChange={addnew}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  placeholder="Breake System"
                  name="breakSystem"
                  value={busdata.toPlace}
                  onChange={addnew}
                />
              </Col>

              <Col>
                <Form.Control
                  placeholder="Mileage"
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
                  placeholder="GearType"
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
          <Button variant="secondary" onClick={props.setshowadd}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddBus