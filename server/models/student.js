import mongoose from 'mongoose';
// Student Modal Schema
const studentSchema = new mongoose.Schema({
  id: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: false },
	googleId: { type: String, required: false },
  enroll: { type: Number },
  imageFile: String,
  course: {
		type: [String],
		default: [],
	},
  teacher: {
		type: [String],
		default: [],
	},
});

