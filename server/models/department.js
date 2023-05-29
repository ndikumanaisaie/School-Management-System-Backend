import mongoose from 'mongoose';
// Department Model Schema
const departmentSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  faculty: {
		type: [String],
		default: [],
	},
  imageFile: String,
})
