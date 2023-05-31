import mongoose from 'mongoose';
// faculty Modal Schema
const facultySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  classe: {
		type: [String],
		default: [],
	},
});
