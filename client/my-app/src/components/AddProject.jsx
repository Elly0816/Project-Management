import React from "react";

import Form from "./Form";

function AddProject() {


    // Create 4 entries
    //One htmlFor project name
    //One htmlFor project summary
    //One htmlFor project url
    //One htmlFor project images if any
    return <Form command = 'ADD'
    route = '/projects'
    method = 'post' /
        >
}

export default AddProject;