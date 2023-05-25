import mongoose from 'mongoose';
// Teacher Modal Schema
const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: false },
	googleId: { type: String, required: false },
  studentId: { type: String, required: false },
	id: { type: String },
})
