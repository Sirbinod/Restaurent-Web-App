const express = require('express');
const tableBook = require('./routes/tableBook');
const app = express();



const port = 8000;

app.listen(port, () =>{
    console.log(`Server running at ${port}`)
});
app.use('/', tableBook);