const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.use('/public',express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
    console.log('Request serverd by node app');    
})

app.listen(port,()=>{
    console.log(`node app is listening on port ${port}`);
})