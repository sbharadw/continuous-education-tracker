import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";
import ChartistGraph from "react-chartist";

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
  const { picture, email, sub } = user;

  //---------------------------start page API scripts----------------------------------------------------------------------------------

  //Assigning unique Aoth0 user id to a variable to use for API calls by id
  const id = sub;

  const [formObject, setFormObject] = useState({
    courseName: "",
    courseHours: "",
    burnHours: "",
    synopsis: "",
    subId: sub,
    checked: false
  })

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
    console.log(formObject)
  };

  // When the form is submitted, use the API.saveCourse method to save the course data
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("burn hours =>" + formObject.burnHours);
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
        .then(handleCleanInputs())
        .catch(err => console.log(`Error occurred when sending information to the database ************* ${err}`));
      }

       alert("Your course is being submitted!")
      //in case we want to read data from database to update the cards call fillOutCards();
  };

  //Handles checkbox change
  function handleCheckboxChange(event) {
    if(formObject.checked===false){
    setFormObject({ ...formObject, burnHours: formObject.courseHours, checked: true });
    console.log("updating burn hours " + formObject.burnHours);
    }else {
      setFormObject({ ...formObject, burnHours: null, checked: false });
      console.log("removing burn hours when unclicked checkbox " + formObject.burnHours);
    }
  }

  //Filling out the cards with information the user entered
  function handleCardsInfo(event) {
    setFormObject({ ...formObject });
    console.log("form object for cards => " + JSON.stringify(formObject));
  }

  //Cleaning input forms once the user adds the course
  function handleCleanInputs(event) {
    setFormObject({
      courseName: "",
      courseHours: "",
      burnHours: "",
      synopsis: "",
      subId: sub,
      checked:false
    });
  }

  // Read saved data from database table and update formObject with it to use for filling out the cards
  function fillOutCards(){
    console.log("GET the course info from database with id => " + id);
    
    API.getCourses()
    .then(res => {
      console.log(res)
      
      var index = res.data.length - 1;
      console.log("index is " + index);
      
      setFormObject({ 
        courseName: res.data[index].courseName,
        courseHours: res.data[index].courseHours,
        burnHours: res.data[index].burnHours,
        synopsis: res.data[index].synopsis,
        subId: sub
         })

    })
    .catch(err => console.log(err));

    console.log("form object for cards => " + JSON.stringify(formObject));
  }

 
  //---------------------------------End Scripts ---------------------------------------------


  return (
    <>
      <Container fluid>
        <Row>

          <Col md="9">
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
                    <Col className="pr-1" md="2">
                      <Form.Group>
                        <label>Hours</label>
                        <Form.Control
                          placeholder="Hours"
                          type="number"   min="0"
                          onChange={handleInputChange}
                          value={formObject.courseHours}
                          name="courseHours"
                        ></Form.Control>
                        <Form.Check className="mb-0 pl-1">
                          <Form.Check.Label>
                            <Form.Check.Input
                              // defaultValue=""
                              checked={formObject.checked}
                              type="checkbox"
                             
                              onChange={handleCheckboxChange}
                            ></Form.Check.Input>
                            <span className="form-check-sign"></span>
                            Burn Hours
                          </Form.Check.Label>
                        </Form.Check>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="11">
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
          <Col md="3">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="cityscape profile background"
                  src={
                    require("assets/img/sidebar-4.jpg")
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
            </Card>
          </Col>
        </Row>

        <Row>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-tag-content text-info"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">COURSE NAME</p>
                      <Card.Title as="h4">{formObject.courseName}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-ambulance text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">TRAUMA HOURS</p>
                      <Card.Title as="h4">{formObject.courseHours}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-bold text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">BURN HOURS</p>
                      <Card.Title as="h4">{formObject.burnHours}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-copy-04 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">SYNOPSIS</p>
                      <Card.Title as="h4">{formObject.synopsis}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

        </Row>
        
      </Container>
      
    </>
  );
}

export default Upgrade;
