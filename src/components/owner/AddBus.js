
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Button, Col, Form, FormControl, Modal, Row } from 'react-bootstrap'
function AddBus(props) {


  const [busdata, setbusdata] = useState(
    {

      busName: "",
      busFeature: "",
      busFacility: "",
      fromPlace: "",
      toPlace: "",
      charges: "",
      distance: "",
      userName: "",

    });

  const toggle = props.showAdd
  const settoggle = props.setshowAdd



  let addnew = (e) => {
    setbusdata({
      ...busdata,
      [e.target.name]: e.target.value,
    })

  }

  useEffect(() => {
    let token = localStorage.getItem("jwt");
    let userData = JSON.parse(atob(token.split(".")[1]));
    let userName1 = userData.sub;
    busdata.userName = userName1

  }, [])


  const handleOpen = () => {
    settoggle(true)
  }


  const handleColse = () => {
    settoggle(false)
  }




  const saveData = async () => {
    try {
      const token = localStorage.getItem("jwt");
      console.log(token)

      let token1 = JSON.parse(token);

      let jwtToken = `Bearer ${token1}`


      let res = await axios.post(`http://localhost:8080/addbus/`, busdata, { headers: { 'Authorization': jwtToken } });
      if (res.data.error) {
        alert('something went wrong')
      } else {
        alert('inserted successfully')

        handleColse();
        setbusdata({
          busName: "",
          busFeature: "",
          busFacility: "",
          fromPlace: "",
          toPlace: "",
          charges: "",
          distance: "",
          userName: "",

        })
      }
    } catch (err) {
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
                {/* <Form.Control
                  placeholder="busFeature"
                  name="busFeature"
                  value={busdata.busFeature}
                  onChange={addnew}
                /> */}

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


                {/* <Form.Control
                  placeholder="busFacility"
                  name="busFacility"
                  value={busdata.busFacility}
                  onChange={addnew}
                /> */}


                <select name="busFacility" value={busdata.busFacility} onChange={addnew}>
                  <option value="#" hidden>Select Bus Facility</option>
                  <option value="AC">AC</option>
                  <option value="NON-AC">NON-AC</option>
                </select>

              </Col>

              <Col>

                <select name='busFeature' value={busdata.busFeature} onChange={addnew}>
                  <option value="#" hidden>Select Bus Feature</option>
                  <option value="sleeper coach">sleeper coach</option>
                  <option value="sitting">sitting</option>
                </select>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Form.Control
                  placeholder="userName"
                  name="userName"
                  value={busdata.userName}
                // onChange={addnew}
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
          <Button variant="primary" onClick={() => { saveData() }}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddBus