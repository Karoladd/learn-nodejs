//npm i express
const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("Hello Word!")
})
app.get('/karoline', function (req, res){
    const id = req.query.id
    res.send("Welcome Karoline "+id)
})
app.get('/karoline/:id', function (req, res){
    const id = req.params.id
    res.send("Hey Karoline "+ id)
})
app.listen(9000, function(req,res){
    console.log('Running...')
});
