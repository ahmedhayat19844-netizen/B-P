import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{ 
    String,
    required:true,
    trim:true
     },

  email:
  { 
    type: String,
    unique: true,
    lowercase:true
  },
    password:{ 
      String,
      unique: true,
      lowercase:true
    }

});

const User = mongoose.model("User", userSchema);

export default User;