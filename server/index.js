const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/vlogApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database');
}).catch((err) => console.log(err));

const vlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String
});

const Vlog = mongoose.model('Vlog', vlogSchema);

// Get all vlogs
app.get('/vlogs', async (req, res) => {
  try {
    const vlogs = await Vlog.find();
    res.json(vlogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific vlog
app.get('/vlogs/:id', async (req, res) => {
  try {
    const vlog = await Vlog.findById(req.params.id);
    if (!vlog) {
      return res.status(404).json({ error: 'Vlog is not found' });
    }
    res.json(vlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new vlog
app.post('/vlogs', async (req, res) => {
  try {
    const vlog = new Vlog(req.body);
    await vlog.save();
    res.json(vlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/vlogs/:id', async (req, res) => {
  try {
    await Vlog.findByIdAndDelete(req.params.id);
    res.json({ message: "Vlog Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000 Check it");
});