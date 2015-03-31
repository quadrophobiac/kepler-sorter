/**
 * Created by stephen on 28/03/15.
 */
var http = require('http');
var url = require('url');
var request = require('request');

http.createServer(onRequest).listen(3000);

function onRequest(req, res) {
    //console.log(req);
    console.log('~~~');
    var queryData = url.parse(req.url, true).query;
    // problem with above was reserved characters
    //? = %3f, & = %26 # however the ? character was not breaking the query
    // when passing a URL to the proxy this way ampersands convert chars subsequent to ampersands
    // to additional query params, so ampersands have to be constructed as follows %26
    // e.g. http://localhost:3000/?url=http://www.asterank.com/api/kepler?query={%22TPLANET%22:{%22$lt%22:320,%22$gt%22:290}}%26limit=10
    console.log(queryData);

    var options = {
        url: queryData.url,
        headers: {
            //'Access-Control-Allow-Origin': 'localhost'
            'Access-Control-Allow-Origin': 'localhost'
        }
    };

    if (queryData.url) {
        console.log(queryData.url);
        request(options).on('error', function(e) {
            res.end(e);
        }).pipe(res);
    }
    else {
        res.end("no url found");
    }

    //var url = apiServerHost + req.url;
    //req.pipe(request(url)).pipe(res);
}/**
 * Created by stephen on 31/03/15.
 */
