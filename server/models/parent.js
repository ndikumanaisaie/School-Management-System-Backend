import mongoose from 'mongoose';
// Teacher Modal Schema
const parentSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: false },
	googleId: { type: String, required: false },
  imageFile: String,
  student: {
		type: [String],
		default: [],
	},
})
