const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  ingredients: Array,
  direction: String,
  serves: Number,
  time: {
    prep: Number,
    cook: Number
  },
  created: Date,
  updated: Date
});



recipeSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created)
    this.created = currentDate;

  next();
});

let Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;