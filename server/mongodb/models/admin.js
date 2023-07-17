import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
  username: { type: String, required: true },
  pwd: { type: String, required: true },
});

const UsersData = mongoose.model("UsersData", UsersSchema);

export default UsersData;
