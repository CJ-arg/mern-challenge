import { Schema, model } from "mongoose";

const UserSchema = Schema({
  name: {
    type: String,
    require: true,
  },
});
