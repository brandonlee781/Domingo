const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

// Schemas
const Recipe = require('../schemas/Recipes-Schema');

let newRecipe = Recipe({
  "name": "Spinach Cheese Pie",
  "ingredients": [
    "2  (10-ounce)  packages  frozen  whole-leaf  spinach,  defrosted",
    "2  tablespoons  butter",
    "1  bunch  scallions,  including  the  firm  green,  chopped  (about  ¼  cup)",
    "½  medium  onion,  chopped",
    "6  eggs  beaten  well",
    "1  (15-ounce)  container  whole  milk  ricotta",
    "½  pound  feta  cheese,  crumbled",
    "1  tablespoon  chopped  dill",
    "¼  cup  chopped  parsley",
    "Pinch  of  grated  nutmeg",
    "Salt  and  pepper  to  taste",
    "Olive  oil  for  the  pan"
  ],
  "direction": "Preheat  the  oven  to  350°F.\nLet  the  spinach  drain  in  a  colander  in  the  sink.  The  easiest  way  to  get  all  the  excess  moisture  out  of  it  is  to  line  your  hand  with  a  double  thickness  of  paper  towels  and  squeeze  handfuls  of  spinach  dry.  Then  chop  it  and  set  aside.\nMelt  the  butter  in  a  large  skillet;  when  its  foaming,  add  the  scallions  and  chopped  onion.  Cook  them  over  medium  heat  until  theyre  soft,  then  add  the  spinach  and  a  sprinkle  of  salt  and  pepper,  and  cook  for  3  minutes,  stirring  from  time  to  time.\nBeat  the  eggs  in  a  large  mixing  bowl  and  whisk  in  the  ricotta.  Stir  in  the  remaining  ingredients,  then  oil  a  t  3  ×  9-inch  baking  dish  well,  including  the  sides.  Mix  the  spinach  with  the  egg-cheese  mixture,  taste  for  seasoning,  and  pour  into  the  pan.\nBake  the  pie  for  30  to  40  minutes,  until  the  moisture  disappears  and  the  top  has  dappled  golden  spots.  Remove  from  the  oven  and  let  sit  for  5  minutes  before  serving.",
  "serves": 8,
  "time": {
    "prep": 25,
    "cook": 19
  }
});

router.get('/', (req, res) => {
  let db = mongoose.connection;
  mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds129030.mlab.com:29030/domingo`);


  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function() {
    Recipe.find({}, function(err, data) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    });
  });
});

module.exports = router;