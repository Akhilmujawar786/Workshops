// server.js (or index.js)
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/akhil', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Workshop model
const Workshop = mongoose.model('Workshop', {
  date: String,
  time: String,
  venue: String,
  description: String,
  speaker: String,
  logo: String,
});

// API endpoint to get all workshops
app.get('/api/workshops', async (req, res) => {
  try {
    const workshops = await Workshop.find();
    res.json(workshops);
  } catch (error) {
    console.error('Error fetching workshops:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// API endpoint to add a new workshop
app.post('/api/workshops', async (req, res) => {
  const workshopData = req.body;

  try {
    const newWorkshop = await Workshop.create(workshopData);
    res.status(201).json(newWorkshop);
  } catch (error) {
    console.error('Error adding workshop:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server runnnig on port ${port}`);
});