import { response } from "express";
import Task from "../models/Task";

const getTasks = async (req, res = response) => {
  res.json({ ok: true, msg: "getTasks" });
};

const createTask = async (req, res = response) => {
  // ver que tenga el evento
  console.log(req.body);

  res.json({ ok: true, msg: "createtask" });
};

const editTask = async (req, res = response) => {
  res.json({ ok: true, msg: "edittask" });
};

const deleteTask = async (req, res = response) => {
  res.json({ ok: true, msg: "deletetask" });
};
export { getTasks, createTask, editTask, deleteTask };
