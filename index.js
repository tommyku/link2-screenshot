var page = require('webpage').create();
var system = require('system');

page.viewportSize = { width: 1024, height: 768 };
page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };

page.open(system.args[1], function() {
  page.render('screenshot.png');
  phantom.exit();
});
