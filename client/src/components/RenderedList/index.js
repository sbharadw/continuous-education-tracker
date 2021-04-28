import React, { useEffect, useState } from "react";
import ListItem from "../ListItem/index";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

// react-bootstrap components
import {
    Button,
    Form,
} from "react-bootstrap";

function RenderedList({ data }){

    const { user } = useAuth0();
    const { sub } = user;

    const[assignedHours, setAssignHours] = useState({hours: null})

    function handleHoursAssign(){
        const{value} = event.target;
        setAssignHours({...assignedHours, hours: value})
        console.log(assignedHours)
    }
    function updateHours(id){
        console.log("function called")

        API.updateUser(id, {assignedhours: assignedHours.hours})



        .then((res)=>{
            console.log(res)
            console.log(`HOURS UPDATE ${res}`)
        })
        .then(console.log(`sending updated object`))
        .catch(err => console.log(`Error occurred when sending information to the database ************* ${err}`));
    }


    return(
        data.map((employee) => (
            <tr onKeyDown={() => updateHours(employee.subId)}>
            <ListItem 
                key={employee._Id}
                onClick={() => console.log(this.id)}
                id={employee.employeeId}
                name={ `${employee.firstname} ${employee.lastname}`}
                burnHours={employee.totalburnhours}
                totalHours={employee.totalhours}
                assigned={
                    <>
                        <Form.Group>
                            <Form.Control
                            placeholder="  Assign"
                            type="number" min="0"
                            onChange={handleHoursAssign}
                            value={assignedHours.hours}
                            name="hours"
                            style={{width: "20%", padding:0, margin:0}}
                            //   disabled={ disable }
                            ></Form.Control>
                        </Form.Group>   
                    </>
                }>
            </ListItem>


            </tr>
        ))
)}

export default RenderedList;