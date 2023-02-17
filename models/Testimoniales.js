import Sequelize, {DataTypes} from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING
  },
  correo: {
    type: Sequelize.STRING
  },
  mensaje: {
    type: Sequelize.STRING
  }
})