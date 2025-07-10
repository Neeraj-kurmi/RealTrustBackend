import Project from '../models/Project.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log(req.file)
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    const project = new Project({ name, description, image });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
