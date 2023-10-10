import { response } from "express";
import Task from "../models/Task.js";

const getTasks = async (req, res = response) => {
  const tasks = await Task.find().populate("user", "name");
  res.json({ ok: true, msg: tasks });
};

const createTask = async (req, res = response) => {
  const task = new Task(req.body);
  try {
    task.user = req.uid;
    const dbSavedTask = await task.save();
    res.json({ ok: true, task: dbSavedTask });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Contact Administrator" });
  }
};

const editTask = async (req, res = response) => {
  const taskId = req.params.id;
  const uid = req.uid;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      res.status(404).json({ ok: false, msg: "Task ID doesen't exist" });
    }
    if (task.user.toString() !== uid) {
      return res.status(401).json({ ok: false, msg: "No permission to edit" });
    }
    const newTask = {
      ...req.body,
      user: uid,
    };
    const editedTask = await Task.findByIdAndUpdate(taskId, newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Contact Administrator" });
  }
};

const deleteTask = async (req, res = response) => {
  res.json({ ok: true, msg: "deletetask" });
};
export { getTasks, createTask, editTask, deleteTask };
