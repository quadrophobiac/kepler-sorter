/**
 * Created by stephen on 02/04/15.
 */
var express = require("express"),
    path = require('path'),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    request = require('request'),
    url = require('url');
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567,
    publicDir = process.argv[2] || __dirname;
    // publicDir = process.argv[2] || __dirname + '/public'; // this would be conventional way to declare the public
    // directory, however this folder installed bower components and modules at root

// Enables CORS
var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get("/index.html", function(req, res){
    res.render(path.join(__dirname, 'index.html'));
});


app.get("/", function (req, res) {
    res.redirect("/index.html");
});
//app.get(/a/, function (req, res) { // using regex routing
app.get("/api", function (req, res) {
    //http://localhost:4567/api?query={%22TPLANET%22:{%22$lt%22:320,%22$gt%22:290}}&limit=10
    // this is functional with above
    var queryData = url.parse(req.url, true).query;
    // extract query and args
    console.log(queryData);
    //http://www.w3schools.com/angular/customers.php
    //req.pipe(request("http://www.w3schools.com/angular/customers.php")).pipe(res);
    req.pipe(request("http://www.asterank.com/api/kepler?query="+queryData.query+"&limit="+queryData.limit)
        .on('error', function(e) {
            res.end(e);
        }))
        .pipe(res);
});

// enable CORS!
app.use(enableCORS);
// http://bannockburn.io/2013/09/cross-origin-resource-sharing-cors-with-a-node-js-express-js-and-sencha-touch-app/
// GODSEND
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(publicDir));
//app.use(express.static(path.join(__dirname, 'public'))); - a diff way of writing the previous
app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);