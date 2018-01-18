var express = require('express');
var app = express();



var port = process.env.PORT || 8080;


app.set('view engine', 'ejs');

app.use(express.static(heroku-node-62561095-2 + '/public'));


app.get('/', function(req, res) {
  res.render('index');
});

app.listen(port, function() {
  console.log('App is running on http://localhost:' + port);
});






