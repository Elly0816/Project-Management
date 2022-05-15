import React from "react";
import Button from "@mui/material/Button";


export default function Form(props) {



    return <div className = "project" >
        <
        form className = "project-form"
    onSubmit = { props.onsubmit } >
        <
        div >
        <
        label htmlFor = "name" > Project Name: < /label> <
        input autoComplete = "off"
    className = "details"
    onChange = { props.handlechange }
    name = "pName"
    type = "text"
    value = { props.pName }
    /> <
    /div> <
    div >
        <
        label htmlFor = "summary" > Project Summary: < /label> <
        textarea className = "details"
    rows = "15"
    onChange = { props.handlechange }
    name = "summary"
    value = { props.summary }
    /> <
    /div> <
    div >
        <
        label htmlFor = "url" > Project url: < /label> <
        input autoCorrect = "off"
    autoComplete = "off"
    className = "details"
    onChange = { props.handlechange }
    name = "url"
    value = { props.url }
    /> <
    /div> <
    div >
        <
        Button type = "submit"
    variant = "contained"
    color = "success" > Add < /Button> <
        /div> <
        /form> <
        /div> 
}