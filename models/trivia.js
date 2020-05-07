const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const triviaSchema = new mongoose.Schema({
    //dex refers to Pokedex information from flavour text
  dex: [
    {
      type: String,
      required: true,
    },
  ],
  dexNumber: {
    type: Number,
    unique: true,
    required: true,
  },
  pokeName: {
    type: String,
    unique: true,
    required: true,
  },
  type: [
    {
      type: Number,
      required: true,
    },
  ],
  //hintImage is the vague hint image that is more vague (IE shadow or back of pokemon)
  hintImage: {
    type: String,
    default: "",
  },
  //pokeSprite is the actual image of the Pokemon
  pokeSprite: {
    type: String,
    default: "",
  },
  //possibleChoices are the 4 options for users to pick when choosing the correct Pokemon
  possibleChoices: [{
      type: String,
      required: true,
  }]
});

const Trivia = mongoose.model("Trivia", triviaSchema);

module.exports = Trivia;
