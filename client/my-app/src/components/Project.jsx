import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";



export default function Project(props) {

    // style={{justifyContent: "center"}}
    const updateUrl = `/update/${props.id}`;
    const deleteUrl = `http://localhost:5000/delete/${props.id}`;

    function deleteProject() {
        axios.get(deleteUrl);
    }


    return ( < div >
        <
        Card style = {
            { width: '18rem' } } >
        <
        Card.Body >
        <
        Card.Title > { props.name } < /Card.Title> <
        Card.Text > { props.summary } <
        /Card.Text> <
        Button variant = "primary"
        href = { props.url } > { props.url } < /Button> <
        /Card.Body> <
        Card.Body >
        <
        Card.Link href = { updateUrl }
        style = {
            {
                textDecoration: 'none',
                color: 'black'
            }
        } > Update < /Card.Link> <
        Card.Link href = ""
        onClick = { deleteProject }
        style = {
            {
                textDecoration: 'none',
                color: 'black'
            }
        } > Delete < /Card.Link> <
        /Card.Body> <
        /Card> <
        br / >
        <
        /div>)
    }