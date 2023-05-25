import mongoose from 'mongoose';
// Course Modal Schema
const courseSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    teacherId: String
});