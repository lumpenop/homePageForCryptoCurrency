const express = require('express');
const app = express();
require('dotenv').config();
const env = process.env;
const port = env.SERVER_PORT || 3001;

const router = require('./routes/index');
const nunjucks = require('nunjucks');

app.set('view engine', 'html');

nunjucks.configure('views',{
    express: app,
})

app.use(express.urlencoded({extended:false}));


app.use('/', router);


app.listen(3000, ()=>{
    console.log('it works!');
})