var express = require("express"),
	path = require("path"),
	bodyParser = require("body-parser"),
	app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(6789, function(){
	console.log("Listening on port 6789");
});