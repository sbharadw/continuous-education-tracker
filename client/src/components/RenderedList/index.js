import React from "react";
import ListItem from "../ListItem/index";

function RenderedList({ data }){
    return(
        data.map((employee, index) => (
            <tr>
            <ListItem name={ employee.firstname }/>
            </tr>
        ))
)}

export default RenderedList;