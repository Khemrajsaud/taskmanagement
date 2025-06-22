const express = require('express');
const router = express.Router();
const task = require("../models/task.js");


// Create Task
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new task({ title, description });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.patch('/tasks/:id/complete', async (req, res) => {
  try {
    const updatedTask = await task.findByIdAndUpdate(
      req.params.id,
      { complete: true },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Update error:", error); // Log the actual error
    res.status(500).json({ message: "Failed to mark task as complete" });
  }
});



// Update task
router.put('/tasks/:id', async (req, res) => {
  try {
    const updated = await task.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
      },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update task" });
  }
});

// Delete task
router.delete('/tasks/:id', async (req, res) => {
  try {
    await task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task" });
  }
});



module.exports = router;
