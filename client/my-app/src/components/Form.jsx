import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

export default function Form(props) {
    const [details, setDetails] = useState({
        pName: "",
        summary: "",
        url: "",
    });

    const { pName, summary, url } = details;

    useEffect(() => {
        if (props.name && props.summary && props.url) {
            setDetails({
                ...details,
                pName: props.name,
                summary: props.summary,
                url: props.url,
            });
        }
    }, [props.name, props.url, props.summary]);

    function handleChange(e) {
        const { name, value } = e.target;
        if (name === "pName") {
            setDetails({...details, pName: value });
        } else if (name === "summary") {
            setDetails({...details, summary: value });
        } else {
            setDetails({...details, url: value });
        }
    }

    function handleSubmit(e) {
        axios({
                method: props.method,
                url: props.route,
                data: { pName: pName, summary: summary, url: url },
            })
            .then((res) => {
                console.log(res);
                props.getNew();
            })
            .catch((err) => console.log(err));
        setDetails({
            pName: "",
            summary: "",
            url: "",
        });
        props.toAdd();
        e.preventDefault();
    }

    return ( <
        div className = "form" >
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
        type = "text"
        value = { url }
        /> <
        /div> <
        div >
        <
        Button type = "submit"
        variant = "contained"
        color = "success" >

        { props.command } <
        /Button> <
        /div> <
        /form> <
        /div>
    );
}