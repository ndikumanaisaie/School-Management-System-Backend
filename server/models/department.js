import mongoose from 'mongoose';
// Department Model Schema
const departmentSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  faculties: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Faculty"
	},
});
