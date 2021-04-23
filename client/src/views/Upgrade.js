import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Upgrade() {

  //---------------------------start page API scripts----------------------------------------------------------------------------------

  const [formObject, setFormObject] = useState({
    courseName: "",
    courseHours: "",
    burnHours: "", 
    synopsis: "",
    subId: sub
  })

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
      console.log(formObject)
    };

      // When the form is submitted, use the API.saveCourse method to save the course data
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.courseName && formObject.courseHours && formObject.burnHours && formObject.synopsis) {
      
      API.saveCourse({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        hospital: formObject.hospital,
        employeeId: formObject.employeeId,
        unit: formObject.unit,
        subId: formObject.subId,
        email: formObject.email
      })
        .then(console.log(`sending object: ${formObject}`))
        .catch(err => console.log(`Error occurred when sending information to the database ************* ${err}`));
    }
  };

//---------------------------------End Scripts ---------------------------------------------


  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card>
              <div className="header text-center">
                <h4 className="title">Light Bootstrap React</h4>
                <p className="category">
                  Are you looking for more components? Please check our Premium
                  Version of Light Bootstrap Dashboard React.
                </p>
                <br></br>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-center">Free</th>
                  </tr>
                </thead>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Upgrade;
