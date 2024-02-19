const db = require("../models");
const Testimony = db.tutorials;

exports.create = (req, res) => {
  if (!req.body.content) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const testimony = {
    content: req.body.content,
    source: req.body.source,
  };

  Testimony.create(testimony)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Testimony."
      });
    });
};

exports.findAll = async (req, res) => {
  const testimonials= await Testimony.findAll();
  res.send(testimonials);
};



