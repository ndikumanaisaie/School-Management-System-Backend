import mongoose from 'mongoose';
// Teacher Modal Schema
const teacherSchema = new mongoose.Schema({
  id: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
	email: { type: String, required: true },
  password: { type: String, required: false },
	googleId: { type: String, required: false },
  imageFile: String,
  course: {
		type: [String],
		default: [],
	},
  studentPresent: {
		type: [String],
		default: [],
	},
  studentAbsent: {
		type: [String],
		default: [],
	},
});