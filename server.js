var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/src/client'));
app.use('/idtmp', express.static(__dirname + '/src/client/id.html'));
app.listen(3000, function() { console.log('listening')});