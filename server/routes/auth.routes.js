const { Router } = require("express");
const { login, createUser } = require("../controllers/auth.controller");
const Zayavka = require("../models/zayavka.model");
const {
  createZayavka,
  del_Zayavka,
} = require("../controllers/zayavka.controller");
const router = Router();

// /api/auth/admin/login
router.post("/admin/login", login);

// /api/auth/admin/create
router.post("/admin/create", createUser);

router.post("/createZayavka", createZayavka);

router.get("/getallZayavka", async (req, res) => {
  const Zayavki = await Zayavka.find();
  res.status(200).json(Zayavki);
});

router.post("/get_Zayavka_profile", async (req, res) => {
  const Zayavki = await Zayavka.find({ id_sozdatelya: req.body.id_sozdatelya });
  res.status(200).json(Zayavki);
});

router.post("/del_Zayavka", del_Zayavka);

// router.get("/ad", (req, res) => {
//   res.status(200).json({ 123: "admin page" });
// });

module.exports = router;
