const express = require('express')
const app = express();
const db = require('./config/db')
const consign = require('consign')
const connect = require('connect');
const port = process.env.PORT || 3001;

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(port, () =>{
    console.log("Backend executando na porta...", port)
}) 