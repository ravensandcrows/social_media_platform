const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        //turns off the loggin on sequelize
        logging: false
    });

module.exports = sequelize;