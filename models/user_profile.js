const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userProfile = new Schema({
  user_id: {
    type: String,
    required: true
  },
  uniq_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  photo: {
    type: String,
    default:null
  },
  phone: {
    type: String,
    required: true
  },
  alternate_phone: {
    type: String,
    default:null
  },
  blood_group: {
    type: String,
    required: true
  },
  permanent_address: {
    type: String,
    default:null
  },
  present_address: {
    type: String,
    default:null
  },
}, {
  timestamps: true,
});

const user_profile = mongoose.model('user_profile', userProfile);

module.exports = user_profile;
