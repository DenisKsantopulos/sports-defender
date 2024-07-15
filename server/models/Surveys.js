const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  id: Number,
  question: String,
  info: String
});

const SurveyModel = mongoose.model("surveys", SurveySchema);
module.exports = SurveyModel;