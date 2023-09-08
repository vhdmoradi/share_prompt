import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email address already exists!"],
    required: [true, "Email address is required!"],
  },
  username: {
    type: String,
    unique: [true, "User name already exists!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
export default User;
