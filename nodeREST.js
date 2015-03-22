/**
 * Created by stephen on 22/03/15.
 */
/* via http://stackoverflow.com/questions/16148403/using-node-js-to-connect-to-a-rest-api/16155551#16155551 */
var http = require("http");
url = 'http://www.asterank.com/api/kepler?query={"PER":{"$lt":1.02595675,"$gt":0.67125}}&limit=10';

// get is a simple wrapper for request()
// which sets the http method to GET
var request = http.get(url, function (response) {
    // data is streamed in chunks from the server
    // so we have to handle the "data" event
    var buffer = "",
        data,
        route;

    response.on("data", function (chunk) {
        buffer += chunk;
    });

    response.on("end", function (err) {
        // finished transferring data
        // dump the raw data
        console.log(buffer);
        console.log("\n");
        data = JSON.parse(buffer);
        route = data.routes[0];

        // extract the distance and time
        console.log("Walking Distance: " + route.legs[0].distance.text);
        console.log("Time: " + route.legs[0].duration.text);
    });
});