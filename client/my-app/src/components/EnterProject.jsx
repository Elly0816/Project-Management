import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Form from "./Form";
import { useState, useEffect } from "react";
import axios from "axios";
import Projects from "./Projects";



export default function EnterProject() {
    //Fetch the projects from the database and save the projects state
    const server = "http://localhost:5000"

    const [projects, changeProjects] = useState([]);

    //get all the projects from the database when the projects component mounts
    useEffect(() => {
        async function getData() {
            await axios.get(`${server}/projects`)
                .then((res) => {
                    changeProjects([...res.data]);
                })
                .catch((err) => console.log(err));
        }
        getData();
        console.log(projects)
    }, [])


    const [toUpdate, setUpdate] = useState();


    //Functions for update
    //Get request to update route should populate the form with project details
    async function getUpdate(id) {
        await axios.get(`${server}/update/${id}`)
            .then(res => { setUpdate(res.data) })
    };


    //Changes the toUpdate state back to undefined
    function toAdd() {
        setUpdate();
    }

    // function to get new projects from the database after every operation
    function getNew() {
        axios.get(`${server}/projects`)
            .then(res => {
                function changed() {
                    if (JSON.stringify(projects) === JSON.stringify(res.data)) {
                        return false
                    } else {
                        return true
                    }
                };
                changed() && changeProjects([...res.data])
            })
            .catch(err => console.log(err))
    }

    return ( < div > {
                toUpdate ? < Form method = 'post'
                summary = { toUpdate.Summary }
                route = { `${server}/update/${toUpdate._id}` }
                url = { toUpdate.Url }
                name = { toUpdate.pName }
                command = "Update"
                toAdd = { toAdd }
                getNew = { getNew }

                /> : <Form command="Add" 
                method = "post"
                route = { `${server}/projects` }
                toAdd = { toAdd }
                getNew = { getNew }
                />} <
                Projects getNew = { getNew }
                projects = { projects }
                server = { server }
                getUpdate = { getUpdate }
                /> <
                /div>);
            }