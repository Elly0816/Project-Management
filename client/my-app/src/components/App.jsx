import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import AddProject from "../pages/AddProject";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";



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
        /Routes> <
        /Router> <
        Footer / >
        <
        /div>);
    }

    export default App;