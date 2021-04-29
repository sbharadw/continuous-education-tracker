import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'

function ListItem({id, name, burnHours, totalHours, needed}){
    return (
        <>
                <th>{ id}</th>
                <th>{ name }</th>
                <th>{ burnHours }</th>
                <th>{ totalHours }</th>
                <th>{ needed }</th>
        </>
    );
}

export default ListItem;