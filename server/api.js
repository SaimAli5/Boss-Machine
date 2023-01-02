const express = require('express');
const apiRouter = express.Router();

// minionsRouter-import
const minionsRouter = require('./minions');
apiRouter.use("/minions", minionsRouter);

// ideasRouter-import
const ideasRounter = require("./ideas");
apiRouter.use("/ideas", ideasRounter);

// meetingsRouter-import
const meetingsRouter = require("./meetings")
apiRouter.use("/meetings", meetingsRouter)

// apiRouter-export
module.exports = apiRouter;