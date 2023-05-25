import mongoose from 'mongoose';
// Student Modal Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: false },
	googleId: { type: String, required: false },
  enroll: { type: Number },
  courseId: { type: Number },
	id: { type: String },
});

