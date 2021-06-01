const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const superagent = require('superagent');
require('dotenv').config();
const getAllData = require('./controllers/getalldata');
const crud = require('./controllers/crud.controller');

const app = express();
const PORT = 8082;
const DB = process.env.DATABASE_URL;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());


// API proof of life
app.get('/', (req, res) => {
  res.send('everything is working!')
});

app.get('/get-characters', getAllData);
app.post('/favorite', crud.createFavCharacter);
app.get('/favorite', crud.getFavCharacter);
app.delete('/favorite/:slug', crud.deleteFavCharacter);
app.put('favorite/:slug', crud.updateFavCharacter);



app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});