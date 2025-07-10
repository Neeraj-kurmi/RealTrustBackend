import Subscriber from '../models/Subscriber.js';

export const getSubscribers = async (req, res) => {
  try {
    const subs = await Subscriber.find();
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createSubscriber = async (req, res) => {
  try {
    const subscriber = new Subscriber(req.body);
    await subscriber.save();
    res.status(201).json(subscriber);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
