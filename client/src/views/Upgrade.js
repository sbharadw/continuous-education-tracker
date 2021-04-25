import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Upgrade() {

    //User authentification ref and destructure
    const { user } = useAuth0();
    const {picture, email, sub } = user;

  //---------------------------start page API scripts----------------------------------------------------------------------------------

  const [formObject, setFormObject] = useState({
    courseName: "",
    courseHours: "",
    burnHours: "", 
    synopsis: "",
    subId: sub,
  })

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
      console.log(formObject)
    };

      // When the form is submitted, use the API.saveCourse method to save the course data
  function handleFormSubmit(event) {
    event.preventDefault ();
    console.log("burn hours =>"+ formObject.burnHours);
    console.log("object before submittion " + JSON.stringify(formObject));
    if (formObject.courseName && formObject.courseHours && formObject.subId) {
      
      API.saveCourse({
       courseName: formObject.courseName,
       courseHours: formObject.courseHours,
       burnHours: formObject.burnHours,
       synopsis: formObject.synopsis,
       subId: formObject.subId
      })
        .then(console.log(`sending object: ${JSON.stringify(formObject)}`))
        .catch(err => console.log(`Error occurred when sending information to the database ************* ${err}`));
    }
  };

  //Handles checkbox change
  function handleCheckboxChange(event) {
    setFormObject({...formObject, burnHours: formObject.courseHours});
    console.log("updating burn hours " + formObject.burnHours);
  }
//---------------------------------End Scripts ---------------------------------------------


return (
  <>
   <Container fluid>
      <Row>
        <Col md="8">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Add Course Information</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="9">
                    <Form.Group>
                      <label>Course name</label>
                      <Form.Control
                        placeholder="Course Name"
                        type="text"
                        onChange={handleInputChange}
                        value={formObject.courseName}
                        name="courseName"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pr-1" md="1">
                      <Form.Group>
                        <label>Hours</label>
                        <Form.Control
                          placeholder="Hours"
                          type="number"
                          onChange={handleInputChange}
                          value={formObject.courseHours}
                          name="courseHours"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  <Col className="burnHoursCheckbox pr-1" md="1">
                    <Form.Group>
                      <label>Burn hours</label>
                      <Form.Control
                        placeholder="Burn Hours"
                        type="checkbox"
                        onChange={handleCheckboxChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="10">
                    <Form.Group>
                      <label>Synopsis</label>
                      <Form.Control className="input-lg"
                        placeholder="Synopsis"
                        type="text"
                        onChange={handleInputChange}
                        value={formObject.synopsis}
                        name="synopsis"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  className="btn-fill pull-right"
                  type="submit"
                  variant="info"
                  onClick={handleFormSubmit}
                >
                 Add Course
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
            {/* <hr></hr>
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
            </div> */}
          </Card>
        </Col>
      </Row>
    </Container>
  </>
);
}

export default Upgrade;
