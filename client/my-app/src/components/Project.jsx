import React from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";



export default function Project(props) {

    const deleteUrl = `http://localhost:5000/delete/${props.id}`;

    function deleteProject() {
        axios.get(deleteUrl);
        props.getNew()
    }

    function update() {
        props.getUpdate(props.id)
    }


    return ( < div className = "project" >
        <
        Card style = {
            { width: '18rem' }
        } >
        <
        Card.Body >
        <
        Card.Title > { props.name } < /Card.Title>  <
        Card.Text > { props.summary } <
        /Card.Text>  <
        Card.Link style = {
            { color: 'black', textDecoration: 'none' } }
        href = { props.url } > { props.url } < /Card.Link> <
        /Card.Body> <
        Card.Body >
        <
        Button variant = "info"
        onClick = { update }
        style = {
            {
                textDecoration: 'none',
                color: 'black'
            }
        } > Update < /Button>  <
        Button variant = "danger"
        onClick = { deleteProject }
        style = {
            {
                textDecoration: 'none',
                color: 'black'
            }
        } > Delete < /Button>  <
        /Card.Body>  <
        /Card>  <
        br / >
        <
        /div>)
    }