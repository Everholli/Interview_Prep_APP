import mongoose from "mongoose";

const questionSchema = new Schema({
  session:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session",
    required: true,
  },
  question:{
    type: String,
  },
  answer:{
    type: String,
  },
  note:{
    type: String,
  },
  isPinned:{
    type: Boolean,
    default: false,
  },
  tags: [{
    type: String,
    trim: true,
  }],
}, { timestamps: true });

const Question = mongoose.model("Question", questionSchema);

export default Question;
