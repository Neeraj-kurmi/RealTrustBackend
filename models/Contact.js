import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: String,
  city: String
});

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;
