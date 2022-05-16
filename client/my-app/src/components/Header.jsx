import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Header() {


    return <Box className = "header" >
        <
        div className = "block-left" >
        <
        Typography sx = {
            { fontSize: "larger", justifyContent: "left" } } >
        <
        a href = "/"
    style = {
            { textDecoration: 'none' } } > Project Management < /a> <
        /Typography> <
        /div>

    <
    div className = "block-right" >
        <
        Typography sx = {
            { minWidth: 100, justifyContent: "right" } } >
        <
        a href = "/contact"
    style = {
            { textDecoration: 'none' } } > Contact < /a> <
        /Typography>

    <
    Typography sx = {
            { minWidth: 100, justifyContent: "right" } } >
        <
        a href = "/about"
    style = {
            { textDecoration: 'none' } } > About < /a></Typography >

        <
        Typography sx = {
            { minWidth: 100, justifyContent: "right" } } >
        <
        a href = "/projects"
    style = {
            { textDecoration: 'none' } } > Projects < /a></Typography >

        <
        Typography sx = {
            { minWidth: 100, justifyContent: "right" } } >
        <
        a href = "/add"
    style = {
            { textDecoration: 'none' } } > Add Project < /a></Typography >
        <
        /div>


    <
    /Box>
}

export default Header;