const { Router } = require('express');
//our dummy-API data that imported from /data/cats.js
const { cats } = require('../../data/cats');

module.exports = Router()
  //a Get endpoint that (C.)Reads(U.D.) a specific cat.
  .get('/:id', (req, res) => {
    //req.params.id grabs the id number from the end of the URL 
    //(/controllers/cats/:id) and assigns it to a variable called "id"
    const id = req.params.id;
    //cats.find is an array function that goes through "cats" and finds all the cats
    //(though it will only be one) whose id matches the id we got from the end of the
    //URL using req.params.id
    const matchingCat = cats.find((cat) => cat.id === id);
    //send a response which is JSONified (converted to JavaScript Object Notation)
    //making it easy to read (for javascript) as it has the formatting of an object.
    res.json(matchingCat);

  })
  //a Get endpoint that (C.)Reads(U.D.) our array of cat objects. "req" is not used
  //for this endpoint since every request for "getting all cats" will be the same, and
  //doesn't need specific info about what cats to get, unlike they get cat by ID endpoint.
  .get('/', (req, res) => {
    //cats.map is an array function that maps through our imported cats, returning
    //and object for each cat which contains the cat.id and the cat.name and assigns
    //them all to a variable called cats2
    const cats2 = cats.map((cat) => { return { id: cat.id, name: cat.name };});
    //once again creating a response that JSONifies our cat info.
    res.json(cats2);
  });
