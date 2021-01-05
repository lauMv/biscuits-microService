const Sequelize = require("sequelize");

const biscuitModel = require("./models/biscuits");

const sequelize = new Sequelize("cakes182", "postgres", "postgres", {
   host: "127.0.0.1",
   dialect: "postgres",
});

const Biscuit = biscuitModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
   console.log("model send");
});

module.exports = {
   Biscuit,
};
