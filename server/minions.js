const express = require('express');
const minionsRouter = express.Router();

// db helper-functions
const { getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
  } = require('./db.js');

// Middlewear function for data validation
const validateMinion = (req, res, next) => {
  const body = req.body
  const requiredFields = ['name', 'title', 'weaknesses', 'salary'];
  // iterate and verify provided data.
  requiredFields.forEach(field => {
    if (req.body[field].length <= 0){
      return res.status(404).send(`${field} field cannot be empty`);
    } 
  });
  next();
};

// GET all
minionsRouter.get('/', (req, res, next)=>{
    res.send(getAllFromDatabase('minions'));
});

// POST 
minionsRouter.post('/', validateMinion, (req, res, next)=>{
    const newMinion = req.body;
    res.send(addToDatabase('minions',newMinion));
});

// GET id
minionsRouter.get('/:minionId', (req, res, next) =>{   
    const minionId = req.params.minionId ;
    res.send(getFromDatabaseById('minions', minionId));
});

// PUT 
minionsRouter.put('/:minionId', validateMinion, (req, res, next) =>{
  const newMinion = req.body;
  res.send(updateInstanceInDatabase('minions', newMinion));
});

// DELETE 
minionsRouter.delete('/:minionId', (req, res, next)=>{
  const minionId = req.params.minionId;
  res.send(deleteFromDatabasebyId('minions', minionId));
})

// minionsRouter-export
module.exports = minionsRouter