const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(cors()); //This permits get requests from React
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //This allows getting axios request body from react


mongoose.connect('mongodb://localhost:27017/projectDB');

const PORT = process.env.PORT;

const Schema = mongoose.Schema;
const projectSchema = new Schema({
    pName: String,
    Summary: String,
    Url: String
});

const Project = mongoose.model('Project', projectSchema);

app.route("/")
    .get((req, res) => {
        res.send();
    })


app.route("/projects") //This sends all the projects in the database to the client
    .get((req, res) => {
        Project.find({}, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                res.send(result);
            }
        })
    })
    .post((req, res) => { //This Creates a new document in the project collection
        const result = req.body
        Project.create({
            pName: result.pName,
            Summary: result.summary,
            Url: result.url
        });
        res.redirect("/projects");
    });

app.route("/update/:id")
    .get((req, res) => {
        const id = req.params.id;
        Project.findOne({ _id: id }, (error, project) => {
            if (error) {
                console.log(error);
            } else {
                res.send(project);
            }
        });
    })
    .post((req, res) => {
        const id = req.params.id;
        console.log(req.body);
        const { pName, summary, url } = req.body;
        Project.findByIdAndUpdate(id, {
            pName: pName,
            Summary: summary,
            Url: url
        }, (error, project) => {
            if (error) {
                console.log(error);
            } else {
                console.log(project);
                res.send(project);
            }
        });
    });

app.route("/delete/:id")
    .get((req, res) => {
        const { id } = req.params;
        Project.findByIdAndDelete(id, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
                res.send(result);
            }
        });
    })


app.listen(PORT, () => {
    console.log(PORT || 3000);
});