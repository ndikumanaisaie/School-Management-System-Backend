import mongoose from 'mongoose';
// Course Modal Schema
const courseSchema = new mongoose.Schema({
    id: { type: String },
    name: String,
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
      }
    ],
    enrolledStudent: {
      type: [String],
      default: [],
    },
});

export default mongoose.model('Courses', courseSchema);