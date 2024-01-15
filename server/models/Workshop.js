// models/Workshop.js
const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
  date: String,
  time: String,
  venue: String,
  description: String,
  speaker: String,
  imageUrl: String,
});

const Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;
