import mongoose from 'mongoose';
// Student Modal Schema
const studentSchema = new mongoose.Schema({
  generalInformation: {
    email: { type: String, required: true },
    gender : { type: String, required: false },
    nationality : { type: String, required: false },
    address : { type: String, required: false },
    phoneNumber : { type: String, required: false },
    imageFile: String,
    badgeId: { type: String, required: false },
  }, 
  privateInformation: {
    bloodGroup: { type: String, required: true },
    emergencyContact : { type: String, required: false },
    user : { type: String, required: false },
    partner : { type: String, required: false },
  },
  enroll: { type: Number },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
    },
  ],
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
    },
  ],
});

export default mongoose.model('Students', studentSchema);
