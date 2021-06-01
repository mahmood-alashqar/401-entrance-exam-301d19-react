const mongoose = require('mongoose');

const charactersSchema = mongoose.Schema({
  characterName: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  gender: String,
  image: String,
  power: String
})
const characterModel = mongoose.model('examModel', charactersSchema);
module.exports = characterModel;