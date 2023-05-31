import mongoose from 'mongoose';
// Teacher Modal Schema
const accountantSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
	teacher: { type: String, required: false },
  classTime: {
		type: Date,
		default: new Date(),
	},
});
