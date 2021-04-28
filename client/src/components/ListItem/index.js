import React from "react";
import Container from 'react-bootstrap/Container'

function ListItem({id, name, burnHours, totalHours, assigned, submit}){

    return (
        <>
                <th>{ id}</th>
                <th>{ name }</th>
                <th>{ burnHours }</th>
                <th>{ totalHours }</th>
                <th>{ assigned }</th>
                <th>{ submit }</th>
        </>
    );
}

export default ListItem;