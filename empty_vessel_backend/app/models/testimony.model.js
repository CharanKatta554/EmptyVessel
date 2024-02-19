module.exports = (sequelize, Sequelize) => {
  const Testimony = sequelize.define("testimonials", {
    content: {
      type: Sequelize.STRING
    },
    source: {
      type: Sequelize.STRING
    }
  });

  return Testimony;
};
