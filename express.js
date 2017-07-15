var express = require('express');
var bodyParser = require('body-parser');
var childProcess = require('child_process');
var uuidv4 = require('uuid/v4');
var fs = require('fs');
var path = require('path');
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

app.get('/screenshot/:id', function (req, res) {
  var id = req.params.id || '';
  var fileName = path.resolve('./public/'+id+'.jpg');
  console.log(fileName);
  console.log(fs.existsSync(fileName));
  if (fs.existsSync(fileName)) {
    res.sendFile(fileName);
  } else {
    res.send('no');
  }
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Fucking listening at http://%s:%s", host, port)
})
