const mongoose = require('mongoose');

const QaSchema = new mongoose.Schema({
  id: Number,
  question: String,
  answer: String
});

const QaModel = mongoose.model("qa", QaSchema);

module.exports = QaModel;