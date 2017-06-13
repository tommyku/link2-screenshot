var express = require('express');
var app = express();

app.get('/screenshot', function (req, res) {
  var url = req.query.hasOwnProperty('url') ? req.query.url : 'https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm';
  res.send(url);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
