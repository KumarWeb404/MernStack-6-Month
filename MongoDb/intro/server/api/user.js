const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  autoId: { type: Number, default: 0 },
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  userType: { type: Number, default: 3 },
  createdAt: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

module.exports = mongoose.model('user', userSchema);
