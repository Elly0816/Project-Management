import React, { useEffect, useState } from "react";
import Form from "./Form";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function UpdateProject() {
    const { id } = useParams();

    const [details, setDetails] = useState({
        pName: "",
        summary: "",
        url: "",
        _id: ""
    });

    const { pName, summary, _id, url } = details;

    useEffect(() => {
        const url = `http://localhost:5000/update/${id}`;
        async function getProject() {
            const result = await axios.get(url);
            const data = result.data;
            setDetails({
                _id: data._id,
                pName: data.pName,
                summary: data.Summary,
                url: data.Url
            });
            // console.log("Details");
            // console.log(details);
        }
        getProject();

    }, []);

    const route = `/update/${_id}`
        // console.log("From Update Project");
        // console.log(pName, summary, url, _id);

    return <Form name = { pName }
    command = "UPDATE"
    route = { route }
    method = "post"
    summary = { summary }
    id = { _id }
    url = { url }
    />
}