
const checkMillionDollarIdea = (req, res, next) => {
    const weeklyRevenue = req.body["weeklyRevenue"];
    const numWeeks = req.body["numWeeks"];
    const ideaWorth = weeklyRevenue*numWeeks;

    if(ideaWorth < 1000000){
      return res.status(404).send("Not worth it!");
    }
    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
