const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
 "sequelize_assignment",
 "root",
 "Adex2030",
  {
    host:"localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;