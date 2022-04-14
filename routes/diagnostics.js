const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));

  // TODO: Logic for sending all the content of db/diagnostics.json
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {

  // const {?, ?, ?} = req.body
  // readFromFile('./db/diagnostics.json').then((data) =>
  // JSON.parse(data)

  //const to destructure keys/props off of req.body
  //conditional for confirming necessary keys/var
  // TODO: Logic for appending data to the db/diagnostics.json file
});

module.exports = diagnostics;
