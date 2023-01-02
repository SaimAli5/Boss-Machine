const express = require("express");
const ideasRouter = express.Router();

// db helper-functions
const checkMillionDollarIdea = require("./checkMillionDollarIdea");
const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db.js');

// Middlewear function for data validation
const validateIdeas = (req, res, next) => {
    const requiredFields = ['name', 'description', 'weeklyRevenue', 'numWeeks'];
    // iterate and verify provided data.
    requiredFields.forEach(field => {
      if (req.body[field].length <= 0){
        return res.status(404).send(`${field} field cannot be empty`);
      }
    });
    next();
};

// GET all
ideasRouter.get("/", (req, res, next) =>{
    res.send(getAllFromDatabase("ideas"));
});

// POST
ideasRouter.post("/", validateIdeas, checkMillionDollarIdea, (req, res, next) =>{
    const newIdea = req.body;
    res.send(addToDatabase("ideas", newIdea));
});

// GET id
ideasRouter.get('/:ideaId', (req, res, next) =>{   
    const ideaId  = req.params.ideaId  ;
    res.send(getFromDatabaseById('ideas', ideaId ));
});

// PUT 
ideasRouter.put('/:ideaId', validateIdeas, (req, res, next) =>{
  const newMinion = req.body;
  res.send(updateInstanceInDatabase('ideas', newMinion));
});

// DELETE 
ideasRouter.delete('/:ideaId', (req, res, next)=>{
  const ideaId  = req.params.ideaId ;
  res.send(deleteFromDatabasebyId('ideas', ideaId ));
});

module.exports = ideasRouter;