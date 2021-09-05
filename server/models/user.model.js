// const { getOwnMetadata } = require("core-js/fn/reflect");
const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
  },

  password: {
    type: String,
  },
});

module.exports = model("users", userSchema);
