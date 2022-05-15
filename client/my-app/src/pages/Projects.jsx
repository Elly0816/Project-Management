import React, { useState, useEffect } from 'react';
import axios from "axios";

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

    return ( < div >
        <
        h1 > Projects < /h1> <
        table >
        <
        thead >
        <
        tr >
        <
        th > Project Name < /th> <
        th > Project Summary < /th> <
        th > Project URL < /th> <
        th > Update < /th> <
        th > Delete < /th> <
        /tr> <
        /thead>

        <
        tbody > {
            projects.map((project) => ( < tr key = { project._id } > < td > { project.pName } < /td> <
                td > { project.Summary } < /td> <
                td > { project.Url } < /td></tr > ))
        } <
        /tbody>

        <
        /table>


        <
        /div>)

    }