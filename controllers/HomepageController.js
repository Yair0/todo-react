const Task = require("../models/Task");

exports.index = (req, res) => {
  let tasks = Task.all().then((tasks) => {
    res.send(tasks);
    //res.render("homepage/index", { tasks: tasks });
  });
};
