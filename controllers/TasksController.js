const Task = require("../models/Task");

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if (req.xhr || req.headers.accept.indexOf("json") > -1) {
      Task.find(id).then(() => res.send("success"));
    }
  });
};

exports.get = (req, res) => {
  let id = req.params.id;
  Task.find(id).then((task) => {
    res.send(task);
  });
};

exports.done = (req, res) => {
  let id = req.params.id;
  Task.find(id).then((task) => {
    taskDone = {
      status: Task.DONE,
    };
    Task.update(task.id, taskDone).then(() => {
      res.send("success");
    });
  });
};

exports.delete = (req, res) => {
  let id = req.params.id;
  Task.find(id).then((task) => {
    Task.delete(task.id).then(() => {
      res.send("success");
    });
  });
};
