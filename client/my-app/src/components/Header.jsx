import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Header() {


    return <Box className = "header" >
        <
        div className = "block-left" >
        <
        a href = "/" >
        <
        Typography sx = {
            { fontSize: "larger", justifyContent: "left" } } > Project Management < /Typography> <
        /a> <
        /div> <
        div className = "block-right" >
        <
        a href = "/contact" >
        <
        Typography sx = {
            { minWidth: 100, justifyContent: "right" } } > Contact < /Typography> <
        /a>

    <
    a href = "/about" >
        <
        Typography sx = {
            { minWidth: 100, justifyContent: "right" } } > About < /Typography> <
        /a>

    <
    a href = "/projects" >
        <
        Typography sx = {
            { minWidth: 100, justifyContent: "right" } } > Projects < /Typography> <
        /a>

    <
    a href = "/add" >
        <
        Typography sx = {
            { minWidth: 100, justifyContent: "right" } } > Add Project < /Typography> <
        /a> <
        /div>


    <
    /Box>
}

export default Header;