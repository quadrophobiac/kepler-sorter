/**
 * Created by stephen on 22/03/15.
 */
/* via http://stackoverflow.com/questions/16148403/using-node-js-to-connect-to-a-rest-api/16155551#16155551 */
var http = require("http");
url = 'http://www.asterank.com/api/kepler?query={"PER":{"$lt":1.02595675,"$gt":0.67125}}&limit=10';

// get is a simple wrapper for request()
// which sets the http method to GET
var request = http.get(url, function (response) {
    var buffer = ""
    response.on("data", function (chunk) {
        buffer += chunk;
    });
    response.on("end", function (err) {
        console.log(buffer);
        console.log("\n");
    });
});