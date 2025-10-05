import mongoose, {Schema} from "mongoose";

const sessionSchema = new Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  experienceLevel: {
    type: String,
    required: true,
  },
  topicsToFocus: [{
    type: String,
    trim: true,
  }],
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  }],
}, { timestamps: true });

const Session = mongoose.model("Session", sessionSchema);

export default Session;
