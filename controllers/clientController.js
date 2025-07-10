import Client from '../models/Client.js';

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    const client = new Client({ name, description, designation, image });
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
