var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', function(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip
  console.log(string)
  next()
})

app.get('/now',
        function(req, res, next) {
          req.time = new Date().toString();
          next();
        },
        function(req, res) {
          res.json({"time": req.time})
        }
       )

app.get('/:word/echo', (req, res, next) => {
  res.json({ echo: req.params.word})
})

// app.get('/name', (req, res) => {
//   var firstname = req.query.first
//   var lastname = req.query.last
  
//   res.json({ name: firstname + " " + lastname})
// })

app.post('/name', (req, res) => {
  var firstname = req.body.first
  var lastname = req.body.last
  
  res.json({ name: firstname + " " + lastname})
})
























 module.exports = app;
