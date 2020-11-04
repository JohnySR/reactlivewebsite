const router = require('express').Router();
let Credential = require('../models/credential.model');

router.route('/').get((req, res) => {
    Credential.find()
    .then(credentials => res.json(credentials))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const password = req.body.password;

  const newCredential = new Credential({password});

  newCredential.save()
    .then(() => res.json('Credential added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;