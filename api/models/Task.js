import { Schema, model } from "mongoose";
const TaskSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  notes: {
    type: String,
  },
  dateStart: {
    type: Date,
    require: true,
  },
  dateEnd: {
    type: Date,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
export default model("Task", TaskSchema);
