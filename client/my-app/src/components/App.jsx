import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import EnterProject from "./EnterProject";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {


    return <div >
        <
        Header / >
        <
        Router >
        <
        Routes >
        <
        Route path = "/"
    element = { < Home / > }
    /> <
    Route path = "/projects"
    element = { < EnterProject / > }
    /> <
    Route path = "/contact"
    element = { < Contact / > }
    /> <
    Route path = "/about"
    element = { < About / > }
    /> <
    /Routes> <
    /Router> <
    Footer / >
        <
        /div>
}