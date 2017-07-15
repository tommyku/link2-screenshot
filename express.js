var express = require('express');
var bodyParser = require('body-parser');
var childProcess = require('child_process');
var uuidv4 = require('uuid/v4');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/screenshot', function (req, res) {
  var url = req.body.hasOwnProperty('url') ? req.body.url : 'https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm';
  var fileName = uuidv4();
  childProcess.exec('npm run capture -- "'+url+'" "public/'+fileName+'.jpg" "1280px*720px"');
  res.send(fileName);
});

app.get('/screenshot', function (req, res) {
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Fucking listening at http://%s:%s", host, port)
})
