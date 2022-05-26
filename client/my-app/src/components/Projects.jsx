import Project from "./Project";

export default function Projects(props) {


    return <div > {
            props.projects.map(project => < Project name = { project.pName }
                key = { project._id }
                id = { project._id }
                summary = { project.Summary }
                url = { project.Url }
                getUpdate = { props.getUpdate }
                getNew = { props.getNew }
                />)} <
                /div> 
            }