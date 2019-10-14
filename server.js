const prerender = require('prerender');
var server = prerender({
  chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu', '--remote-debugging-port=9222', '--hide-scrollbars']
});
server.use(require('prerender-memory-cache'))
server.start();