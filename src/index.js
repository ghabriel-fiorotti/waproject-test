const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const express = require('express');
const app = express();


const laboratories = require('./routes/laboratories');
const exams = require('./routes/exams');
const associations = require('./routes/associations');

app.use(express.json());


app.use('/laboratories', laboratories);
app.use('/exams', exams);
app.use('/associations', associations);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))



app.use('/swagger-generator', (req, res) => {
    const swagger = require('../swagger');
    return res.json('[Swagger created]').status(200);
})

app.get('/', (req, res) => {
    res.send({ "message" : 'servidor rodando'})
})

module.exports = app;