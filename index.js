const express = require('express');
const mongoose = require('mongoose');
require ('dotenv').config();
const bodyParser = require('body-parser');
const tableBook = require('./routes/tableBook');
const itemMenu = require('./routes/itemMenu');
const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB, {
    useCreateIndex: true, useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false
}).then(() =>{
    console.log('DB Connected');
}).catch((err) =>{
    console.log(err);
})

app.listen(process.env.PORT, () =>{
    console.log(`Server running at ${process.env.PORT}`)
});
app.use('/', tableBook);
app.use('/', itemMenu);