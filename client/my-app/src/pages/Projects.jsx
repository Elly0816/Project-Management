import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Projects() {
    const [projects, changeProjects] = useState([]);

    useEffect(() => {
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
        /tr> <
        /thead>

        <
        tbody > {
            projects.map((project, index) => ( < tr key = { index } > < td > { project.pName } < /td> <
                td > { project.Summary } < /td> <
                td > { project.Url } < /td></tr > ))
        } <
        /tbody>

        <
        /table>


        <
        /div>)

    }