var express = require('express');

var app = express();

app.get('*', function(req, res) {
    res.send('ohai');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Node app is running on port', port);
});
