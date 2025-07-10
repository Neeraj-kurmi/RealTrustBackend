import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String
});

const Project = mongoose.model('Project', projectSchema);
export default Project;
