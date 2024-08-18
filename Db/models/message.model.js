import { model, Schema } from "mongoose";
const messageSchema = new Schema({
  message: String,
  user: String,
});

const Message = model("Message", messageSchema);
export default Message;
