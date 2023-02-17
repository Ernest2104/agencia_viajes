// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ path: 'variables.env' })

const app = express();

//Conectar la base de datos
db.authenticate()
  .then(() => console.log('Base de Datos conectada'))
  .catch(error => console.log(error))

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener al año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes"
  next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

//Definir la carpeta publica
app.use(express.static('public'));

//agregar router
app.use('/', router);

//Puerto y host para la app
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 4000;

app.listen(port, host, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`)
});

