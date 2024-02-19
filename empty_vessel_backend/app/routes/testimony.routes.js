module.exports = app => {
  const testimonials = require("../controllers/testimony.controller.js");

  var router = require("express").Router();

  router.post("/", testimonials.create);

  router.get("/", testimonials.findAll);

  app.use("/api/testimonials", router);
};
