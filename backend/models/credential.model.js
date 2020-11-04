const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const credentialSchema = new Schema({
  userID: { type: String, required: true },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Credential = mongoose.model('Credential', credentialSchema);

module.exports = Credential;