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
        Project.find({}, (result, error) => {
            if (error) {
                console.log(error);
                res.send(error);
            } else {
                res.send(result);
            }
        })
    })
    .post((req, res) => { //This Creates a new document in the project collection
        const result = req.body
        console.log(result);
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
        console.log(id);
        // Project.findOne({_id: id}, )
        res.send();
    })


app.listen(PORT, () => {
    console.log(PORT || 3000);
});