import mongoose from 'mongoose';
// Student Modal Schema
const markSchema = new mongoose.Schema({
  homework: { type: Number },
  quiz: { type: Number, required: true },
  exam: { type: Number, required: true },
  total: { type: Number, required: false },
  parcentage: { type: Number, required: false },
  course: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
  teacher: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
    },
  ],
  student: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
});

export default mongoose.model('Marks', markSchema);