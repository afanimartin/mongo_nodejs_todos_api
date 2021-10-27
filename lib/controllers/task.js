const Task = require("../models/Task");

const tasks = {};

tasks.get = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
};

tasks.post = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

tasks.getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with id: ${req.params.id} not found` });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json(error);
  }
};

tasks.update = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with id: ${req.params.id} not found` });
    }

    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

tasks.delete = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });

    if (!task) {
      return res
        .status(404)
        .json({ message: `Task with id: ${req.params.id} not found` });
    }

    res.status(200).json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = tasks;
