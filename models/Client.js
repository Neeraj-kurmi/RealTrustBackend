import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  designation: String,
  image: String
});

const Client = mongoose.model('Client', clientSchema);
export default Client;
