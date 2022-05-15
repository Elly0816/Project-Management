import React, { useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Project() {
    let navigate = useNavigate();

    const [{ pName, summary, url }, setDetails] = useState({
        pName: "",
        summary: "",
        url: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === "pName") {
            setDetails({ pName: value, summary: summary, url: url })
        } else if (name === "summary") {
            setDetails({ pName: pName, summary: value, url: url })
        } else {
            setDetails({ pName: pName, summary: summary, url: value })
        }
    }

    function handleSubmit(e) {
        console.log({ pName, summary, url });
        axios({
                method: 'post',
                url: "http://localhost:5000/projects",
                data: { pName: pName, summary: summary, url: url }
            })
            .then((res) => { console.log(res) })
            .catch((err) => console.log(err));
        setDetails({
            pName: "",
            summary: "",
            url: ""
        });
        navigate("/projects");
        e.preventDefault();
    }

    // Create 4 entries
    //One htmlFor project name
    //One htmlFor project summary
    //One htmlFor project url
    //One htmlFor project images if any
    return <div className = "project" >
        <
        form className = "project-form"
    onSubmit = { handleSubmit } >
        <
        div >
        <
        label htmlFor = "name" > Project Name: < /label> <
        input autoComplete = "off"
    className = "details"
    onChange = { handleChange }
    name = "pName"
    type = "text"
    value = { pName }
    /> <
    /div> <
    div >
        <
        label htmlFor = "summary" > Project Summary: < /label> <
        textarea className = "details"
    rows = "15"
    onChange = { handleChange }
    name = "summary"
    value = { summary }
    /> <
    /div> <
    div >
        <
        label htmlFor = "url" > Project url: < /label> <
        input autoCorrect = "off"
    autoComplete = "off"
    className = "details"
    onChange = { handleChange }
    name = "url"
    value = { url }
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

export default Project;