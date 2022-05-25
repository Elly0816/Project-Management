import React, { useEffect } from "react";
import axios from "axios";


export default function Home() {

    useEffect(() => {
        axios.get("http://localhost:5000");
    }, []);


    return <div className = "home" >
        <
        h1 > Welcome to the only Project Manager you 'll ever need</h1>  <
        /div>
}