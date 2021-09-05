const keys = require("../keys");
const Zayavka = require("../models/zayavka.model");

module.exports.createZayavka = async (req, res) => {
  const zayavka = new Zayavka({
    tzeh: req.body.tzeh,
    professia: req.body.professia,
    description: req.body.description,
    id_sozdatelya: req.body.id,
    date: req.body.date,
  });
  await zayavka.save();
  res.status(201).json({ message: "ZAYAVKA_CREATED" });
};
module.exports.del_Zayavka = async (req, res) => {
  const candidate_to_delete = await Zayavka.findOne({ _id: req.body.dt });
  if (candidate_to_delete) {
    candidate_to_delete.remove();
  } else {
    res.status(500).json({ message: "SOMETHING WRONG" });
  }

  res.status(200).json({ message: "ZAYAVKA_DELETED" });
};
