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

    const[selectedEmployee, setSelectedEmployee] = useState({
        eId: "",
        sId: ""
    })

    const individualSearch = (id) => {
        API.getUser(id)
            .then(res => {
                console.log(res)
                const list = res.data
                data = [list]
                console.log(data)
            })
    }

    return(
        data.map((employee) => (

            <tr onClick={() => {
                console.log(employee.subId) 
                setSelectedEmployee({
                    eId: employee.employeeId,
                    sId: employee.subId
                })
                console.log(selectedEmployee)
                individualSearch(employee.subId)
                const aNumber = Number(window.prompt(`Edit ${employee.firstname} ${employee.lastname}'s assigned hours`, ""));
                aNumber
                
                API.updateUser(employee.subId, {assignedhours: aNumber})

            }
            }>
            <ListItem 
                key={employee.subId}
                onClick={() => console.log(this.id)}
                id={employee.employeeId}
                name={ `${employee.firstname} ${employee.lastname}`}
                burnHours={employee.totalburnhours}
                totalHours={employee.totalhours}
                needed={employee.assignedhours}>
            </ListItem>

            </tr>
        ))
)}

export default RenderedList;