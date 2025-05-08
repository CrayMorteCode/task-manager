const Tasks = require("../models/task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const CreateTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    return res.status(201).json({ "task created": task });
  } catch (error) {
    return res.status(400).send(error);
  }
};
const UpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const newtasks = await Tasks.findOneAndUpdate({ _id: id }, req.body,{new:true,runValidators:true,upsert:false});
    if (!newtasks) {
      return res.status(404).json({ message: "this task doesn't exist" });
    }
    return res.status(200).json({ "task is updated": newtasks });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await Tasks.deleteOne({ _id: id });
    if (!deleteTask) {
      return res.status(405).json({ error: "cant find the task by this id" });
    }
    return res.status(206).json({ "successfully deleted task": deleteTask });
  } catch (error) {
    return res.status(505).json({ error });
  }
};
const getTask = async (req, res) => {
 try {
  const{id}=req.params;
  const task=await Tasks.findOne({_id:id})
  if(!task){
    return res.status(404).json({error:"task doesn't exist"})
  }
  return res.status(200).json({task})
 } catch (error) {
  return res.status(500).json({error})
 } }

module.exports = {
  getAllTasks,
  CreateTask,
  UpdateTask,
  DeleteTask,
  getTask,
};
