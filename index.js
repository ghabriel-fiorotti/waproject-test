const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const laboratories = require('./src/routes/laboratories');
const exams = require('./src/routes/exams');
const associations = require('./src/routes/associations');

app.use(express.json());


app.use('/laboratories', laboratories);
app.use('/exams', exams);
app.use('/associations', associations);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use('/swagger-generator', (req, res) => {
    const swagger = require('./swagger');
    return res.json('[Swagger created]').status(200);
})

app.listen(PORT);

console.log('Running at Port '+ PORT );