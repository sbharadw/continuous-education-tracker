import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";


function User() {

  //User authentification ref and destructure
  const { user } = useAuth0();
  const {picture, email, sub } = user;

  //---------------------------start page API scripts----------------------------------------------------------------------------------


  const [myUser, setMyUser] = useState({})

  const id = sub

    useEffect(() => {
      API.getUser(id)
        .then(res => {
          console.log(res)
          populateFields(res)
          handleDisable(res)
          handleFormUpdate(res)
          setMyUser(res.data)
        })
        .catch(err => console.log(err));
    }, [])

  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    hospital: "",
    employeeId: "",
    unit: "",
    subId: sub,
    email: email
  })

  function populateFields(res){
    if(res !== null){
      setFormObject({ hospital: res.data.hospital })
      setFormObject({ unit: res.data.unit })
      setFormObject({ firstName: res.data.firstname })
      setFormObject({ lastName: res.data.lastname })
      setFormObject({ employeeId: res.data.employeeId })
      setDisableObject({ created: true })
  }
}

  const[disableObject, setDisableObject] = useState({
    disable: false,
    created: false
  })

  const handleDisable = (res) => {
    if (res !== null){
      setDisableObject({disable: true})
    }
  }


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
      console.log(formObject)
    };

      // When the form is submitted, use the API.saveUser method to save the user data
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.firstName && formObject.lastName && formObject.hospital && formObject.employeeId && formObject.unit && disableObject.created === false) {
      
      API.saveUser({
        firstname: formObject.firstName,
        lastname: formObject.lastName,
        hospital: formObject.hospital,
        employeeId: formObject.employeeId,
        unit: formObject.unit,
        subId: formObject.subId,
        email: formObject.email
      })
        .then(console.log(`sending object: ${formObject}`))
        .catch(err => console.log(`Error occurred when sending information to the database ************* ${err}`));
    } else{

      API.updateUser({
        firstname: formObject.firstName,
        lastname: formObject.lastName,
        hospital: formObject.hospital,
        employeeId: formObject.employeeId,
        unit: formObject.unit,
        subId: formObject.subId,
        email: formObject.email
      })
      .then(console.log(`sending updated object: ${formObject}`))
      .catch(err => console.log(`Error occurred when sending information to the database ************* ${err}`));
    }
  };

    //when the form is submitted, use the API.updateUser method to update the user data
  function handleFormUpdate(event, res){
    //event.preventDefault();
    setDisableObject({disable: false})
    console.log(myUser)
  }


//---------------------------------End Scripts ---------------------------------------------

  return (

    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Profile</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Hospital</label>
                        <Form.Control
                          placeholder="Hospital Name"
                          type="text"
                          onChange={handleInputChange}
                          value={formObject.hospital}
                          name="hospital"
                          disabled={ disableObject.disable }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Unit</label>
                        <Form.Control
                          placeholder="Unit"
                          as= "select" 
                          onChange={handleInputChange}
                          value={formObject.unit}
                          name="unit"
                          disabled={ disableObject.disable }
                        >
                          <option>Select</option>
                          <option>ED</option>
                          <option>Acute Care</option>
                          <option>PICU</option>
                          <option>OR</option>
                          <option>PACU</option>
                          <option>Transport</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                          defaultValue={`${email}`}
                          disabled
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>First Name</label>
                        <Form.Control
                          placeholder="First Name"
                          type="text"
                          onChange={handleInputChange}
                          value={formObject.firstName}
                          name="firstName"
                          disabled={ disableObject.disable }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Last Name</label>
                        <Form.Control
                          placeholder="Last Name"
                          type="text"
                          onChange={handleInputChange}
                          value={formObject.lastName}
                          name="lastName"
                          disabled={ disableObject.disable }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Employee ID</label>
                        <Form.Control
                          placeholder="Employee ID"
                          type="text"
                          onChange={handleInputChange}
                          value={formObject.employeeId}
                          name="employeeId"
                          disabled={ disableObject.disable }
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleFormSubmit}
                    disabled = {disableObject.disable}
                  >
                    Submit
                  </Button>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={handleFormUpdate}
                    disabled = {!disableObject.disable}
                  >
                    Update
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="cityscape profile background"
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={picture}
                    ></img>
                    <h5 className="title"></h5>
                  </a>
                  <p className="description"></p>
                </div>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
