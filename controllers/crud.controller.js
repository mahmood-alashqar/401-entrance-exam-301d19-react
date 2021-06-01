const characterModel = require('../models/fav.model.mogoose');

const createFavCharacter = async (req, res) => {
  const {
    characterName,
    gender,
    image,
    psiPowers,
  } = req.body;


  const slug = characterName.toLowerCase().split(' ').join('-');
  characterModel.find({ slug: slug }, (error, data) => {
    if (data.length > 0) {
      res.send('data in our DB ');
    } else {
      const newCharacter = new characterModel({
        characterName: characterName,
        slug: slug,
        gender: gender,
        image: image,
        psiPowers: psiPowers
      });
      newCharacter.save();
    }
  }
  );
};

const getFavCharacter = async (req, res) => {
  characterModel.find({}, (error, data) => {
    res.send(data);
  })
};
const deleteFavCharacter = async (req, res) => {

  const slug = req.params.slug;
  characterModel.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      characterModel.find({}, (error, data) => {
        res.send(Data);
      })
    }
  })
};


const updateFavCharacter = async (res, req) => {
  const {
    characterName,
    gender,
  } = req.body;
  const slug = req.params.slug;
  characterModel.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    } else {
      data[0].characterName = characterName;
      data[0].gender = gender;
      data[0].save();
      characterModel.find({}, (error, data) => {
        res.send(data);
      })
    }
  })
}

module.exports = {
  createFavCharacter,
  getFavCharacter,
  deleteFavCharacter,
  updateFavCharacter

};
