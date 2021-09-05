const { model, Schema } = require("mongoose");

const zayavkaSchema = new Schema({
  tzeh: {
    type: String,
  },
  professia: {
    type: String,
  },
  description: {
    type: String,
  },
  id_sozdatelya: {
    type: String,
  },
  date: {
    type: String,
  },
});

module.exports = model("zayavka", zayavkaSchema);
