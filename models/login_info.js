const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const login_schema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true
  },
  login_status:{
    type: Boolean,
    default: false
  },
  login_auth:{
    type: Boolean,
    default: true
  },
  login_token:{
    type: String,
    default: null
  }
}, {
  timestamps: true,
});

const login_info = mongoose.model('login_info', login_schema);

module.exports = login_info;
