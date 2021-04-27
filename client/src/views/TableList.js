import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import API from "../utils/API";

// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Row,
  Col,
  Form
} from "react-bootstrap";

function TableList() {

  //User authentification ref and destructure
  const { user } = useAuth0();
  const {picture, email, sub } = user;
  const [searchTerm, setSearchTerm] = useState({nurseUnit: "",})
  const [nurseList, setNurseList] = useState({})
  const { nurseUnit} = searchTerm


  function handleSearchTerm(event){
    const { value } = event.target;
    console.log(value)
    setSearchTerm({nurseUnit: value})
  }

  const populateList = (id) => {

    console.log(`API CALLED WITH UNIT: ${id}`)

    API.getUsersByUnit(id)
      .then(res => {
        console.log(res)
        setNurseList({res})
        setSearchTerm({nurseUnit: ""})
      })
      .catch(err => console.log(err));
  }

  

  if(nurseUnit !== ""){
    populateList(nurseUnit);
  }

  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Nurse List</Card.Title>
                <p className="card-category">
                  Select a unit to view their progress or assign hours
                </p>
              </Card.Header>
              <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Unit</label>
                        <Form.Control
                          placeholder="Unit"
                          as= "select" 
                          onChange={handleSearchTerm}
                          value={searchTerm}
                          name="unit"
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
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Burn Hours</th>
                      <th className="border-0">Total Hours</th>
                      <th className="border-0">Needed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Alexander Flemming</td>
                      <td>6</td>
                      <td>14</td>
                      <td>5</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
