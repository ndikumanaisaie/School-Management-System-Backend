import mongoose from 'mongoose';
// faculty Modal Schema
const facultySchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Classe"
	  }
  ],
  department: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department"
    }
  ]
});

export default mongoose.model('Faculties', facultySchema);
