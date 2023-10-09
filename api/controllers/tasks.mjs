import { response } from "express";

const getTasks = async (req, res = response) => {
  res.json({ ok: true, msg: "getTasks" });
};

const createTask = async (req, res = response) => {
  res.json({ ok: true, msg: "createtask" });
};

const editTask = async (req, res = response) => {
  res.json({ ok: true, msg: "edittask" });
};

const deleteTask = async (req, res = response) => {
  res.json({ ok: true, msg: "deletetask" });
};
export { getTasks, createTask, editTask, deleteTask };
