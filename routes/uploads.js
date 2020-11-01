const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/uploads", async (req, res) => {
  let uploadList = await models.uploads.findAll();

  uploadList = uploadList.map(item => {
    let buff = new Buffer(item.image, "base64");
    let encoded = buff.toString("ascii");

    return {
      ...item.toJSON(),
      image: encoded
    };
  });

  res.send(uploadList);
});

router.post("/uploads", async (req, res) => {
  await models.uploads.create({
    file_name: req.body.file_name,
    image: req.body.image
  });

  res.sendStatus(201);
});

module.exports = router;
