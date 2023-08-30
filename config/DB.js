const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crudoperations', 'root', 'vermas@123', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });
module.exports = sequelize;
 