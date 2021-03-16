const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

// const db = require('/models');

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewIrlParser: true, useFindAndModify: false });

app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
);
