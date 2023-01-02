const express = require('express');
const meetingsRouter = express.Router();

// db helper-functions
const { 
    createMeeting,
    getAllFromDatabase,
    deleteAllFromDatabase,
  } = require('./db.js');

// GET
meetingsRouter.get("/", (req, res, next) =>{
    res.send(getAllFromDatabase("meetings"));
});

// POST
meetingsRouter.post("/", (req, res, next) =>{
    res.send(createMeeting());
});

// DELETE
meetingsRouter.delete("/", (req, res, next) =>{
    res.send(deleteAllFromDatabase("meetings"))
});


module.exports = meetingsRouter;