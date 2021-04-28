import React, { useEffect, useState, setState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";
import RenderedList from "../components/RenderedList/index"

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
  const [searchTerm, setSearchTerm] = useState({nurseUnit: "", renderedUnit: ""})
  const [data, setData] = useState([])
  const { nurseUnit} = searchTerm
  const unitHours = searchTerm.renderedUnit;

  function handleSearchTerm(event){
    const { value } = event.target;
    console.log(value)
    setSearchTerm({nurseUnit: value})
  }

  const populateList = (id) => {

    console.log(`API CALLED WITH UNIT: ${id}`)

    API.getUsersByUnit(id)
      .then(res => {
        console.log(res.data)
        const list = res.data;
        console.log(list)
        setData(list)
        console.log(searchTerm)
      }).then(
        setSearchTerm({
          renderedUnit: id,
          nurseUnit: ""
        })
      )
      .catch(err => console.log(err));
  }

  if(nurseUnit !== ""){
    populateList(nurseUnit);
  }

  console.log(data)

  // const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(nurseUnit.toLowerCase()));



  const[assignedHours, setAssignHours] = useState({hours: null})


  function handleHoursAssign(){
      const{value} = event.target;
      setAssignHours({...assignedHours, hours: value})
      console.log(unitHours)
      updateHoursByUnit(unitHours)
  }
  function updateHoursByUnit(id){
      console.log("function called")

      API.updateUserHours(id, {assignedhours: assignedHours.hours})

      .then((res)=>{
          console.log(res)
          console.log(`HOURS UPDATE ${res}`)
      })
      .then(console.log(`sending updated object`))
      .catch(err => console.log(`Error occurred when sending information to the database ************* ${err}`));
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
                      <>
                        <Form.Group>
                            <Form.Control
                            placeholder="  Assign Hours  "
                            type="number" min="0"
                            onChange={handleHoursAssign}
                            value={assignedHours.hours}
                            name="hours"
                            style={{width: "50%", padding:0, margin:0, textAlign:"center"}}
                            ></Form.Control>
                        </Form.Group>   
                      </>
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
                    <RenderedList data={ data }/>
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
