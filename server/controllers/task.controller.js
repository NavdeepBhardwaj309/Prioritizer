const db = require("../models");
const Task = db.task;

// Create a new Task
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all Tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one Task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) res.json(task);
    else res.status(404).json({ message: "Task not found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const updated = await Task.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ message: "Task updated", updated });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.destroy({ where: { id: req.params.id } });
    res.json({ message: "Task deleted", deleted });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
