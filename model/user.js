const mongoose = require("mongoose")
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName:  String,
  lastName: String,
  gender:   String,
  dob: { type: Date, default: Date.now },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now },
  ethnicity: String,
  fromPlace: String,
  toPlace: String,
});

module.exports = mongoose.model('Users', userSchema);