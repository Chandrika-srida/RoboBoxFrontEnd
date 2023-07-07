import {model, models, Schema} from "mongoose";

const formDataSchema = new Schema({
  studentname: String,
  parentname: String,
  age: String,
  emailid: String,
  mobileno: String,
  raddress: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

export const FormData = models?.formData || model('FormData', formDataSchema);