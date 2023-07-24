const express       = require('express');
const path          = require('path');
const app           = express();

const host = '0.0.0.0';
const port = 80;

const appRouting    = require('./routers/app-route');
app.use('/', appRouting);

app.listen(port, host, ()=>{
    console.log(`Aplication runnin on http://${host}:${port}`);
});
