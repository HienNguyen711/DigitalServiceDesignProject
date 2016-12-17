//create node server, also using express js framework
var express = require('express');
var reload = require('reload');
var app = express();


app.set('port', process.env.PORT || 3000 );//take the port from the local computer env or either using default port 3000

app.set('view engine', 'ejs');
app.set('views', 'app/views');



app.use(express.static('app/public'));
app.use(require('./routes/index'));


var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
