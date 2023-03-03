const express = require('express');
const cors = require('cors');
const puppeteer = require('puppeteer');
const router = require('./router/route');


const app = express();

app.use(express.json());
app.use(cors());
//middleware
app.use((req,res,next) => {
    next();
})

app.use('/api',router);

app.listen(3000, () => {
    console.log('listening on port 3000');
})