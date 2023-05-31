import mongoose from 'mongoose';
// Teacher Modal Schema
const parentSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: false },
  googleId: { type: String, required: false },
  imageFile: String,
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
});

export default mongoose.model('Parents', parentSchema);
