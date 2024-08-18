import mongoose from "mongoose";

const connectionDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/sara7a");
    console.log("connected to db successfully");
  } catch (err) {
    console.log("failed to connect to db", err);
  }
};
export default connectionDb;
