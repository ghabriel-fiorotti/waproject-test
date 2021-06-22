const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const laboratories = require('./src/routes/laboratories');
const exams = require('./src/routes/exams');

app.use(express.json());

app.use('/laboratories', laboratories);
app.use('/exams', exams);

app.listen(PORT);

console.log('Running at Port '+ PORT );