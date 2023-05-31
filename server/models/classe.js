import mongoose from 'mongoose';
// Teacher Modal Schema
const classeSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
	teacher: { type: String, required: false },
  classTime: {
		type: Date,
		default: new Date(),
	},
	faculty: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Faculty"
		}
	],
});


export default mongoose.model('Classes', classeSchema);
