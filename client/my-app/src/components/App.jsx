import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import AddProject from "./AddProject";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import UpdateProject from "./UpdateProject";



function App() {

    return ( < div >
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
        Route path = "/add"
        element = { < AddProject / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        Route path = "/projects"
        element = { < Projects / > }
        /> <
        Route path = "/update/:id"
        element = { < UpdateProject / > }
        /> <
        /Routes> <
        /Router> <
        Footer / >
        <
        /div>);
    }

    export default App;