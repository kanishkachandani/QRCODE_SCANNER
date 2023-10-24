const express = require("express");
const { getdata, savedata, deletedata } = require("../controllers/qrcodes");
const { qrcodeSchema } = require("../models/dbschema");
const router = express.Router();
router.route("/qrcodes").post(savedata);
router.route("/qrcodes").get(getdata);
router.route("/qrcodes/:id").post(deletedata);

module.exports = router;
