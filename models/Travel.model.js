const { Schema, model } = require("mongoose");
const schema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  image: {
    type: String,
    required: true,
  },
  descr: {
    type: String,
    required: true,
    minLength: 3,
  },
});

module.exports.Travel = model("travel_book", schema, "travel_books");
