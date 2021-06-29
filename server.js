const app = require('./src/index')
require('dotenv').config()

const PORT = process.env.PORT || 3000

if(process.env.ENVIROMENT != 'DEV'){
    process.env.URL_HOST = process.env.PROD_URL_HOST
}

app.listen(PORT);
console.log('Running at Port '+ PORT );