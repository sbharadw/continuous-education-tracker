import React from "react";
import Container from 'react-bootstrap/Container'

function ListItem({name}){

    return (
        <Container>
                <th></th>
                <th>{ name }</th>
                <th>{ name }</th>
                <th>{ name }</th>
                <th>{ name }</th>
        </Container>
    );
}

export default ListItem;