import mongoose from 'mongoose';
// Course Modal Schema
const courseSchema = new mongoose.Schema({
    id: { type: String },
    name: String,
    teacher: {
      type: [String],
      default: [],
    },
    enrolledStudent: {
      type: [String],
      default: [],
    },
});