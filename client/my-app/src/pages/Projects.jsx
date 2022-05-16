import React, { useState, useEffect } from 'react';
import axios from "axios";
import Project from "../components/Project";

export default function Projects() {
    const [projects, changeProjects] = useState([]);

    useEffect(() => { //Handles getting the projects from the database
        async function getProjects() {
            const result = await axios.get("http://localhost:5000/projects");
            const fromBackend = result.data;
            console.log(fromBackend);
            changeProjects(fromBackend);
        }

        getProjects();
    }, []);

    return ( < div className = 'project-head' >

            <
            div >
            <
            h1 style = {
                { textAlign: "center", paddingBottom: "10px" } } > Projects < /h1> <
            div className = 'projects' > {
                (projects.length > 0) ?
                projects.map(project => < Project key = { project._id }
                    id = { project._id }
                    summary = { project.Summary }
                    url = { project.Url }
                    name = { project.pName }
                    />): < h5 > You have no Projects yet < /h5>
                } <
                /div> <
                /div>

                <
                /div>)

            }