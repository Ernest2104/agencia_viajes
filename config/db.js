// Definimos conexion a la base de datos MySQL
import Sequelize from 'sequelize';
// require('dotenv').config({ path: 'variables.env' });
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: 'variables.env' })

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASSWORD, {
  host: process.env.BD_HOST,
  port: process.env.BD_PORT,
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorAliases: false
});

export default db;