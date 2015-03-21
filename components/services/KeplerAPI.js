/**
 * Created by stephen on 21/03/15.
 */
'use strict';

app.factory('KeplerAPI', function($q, $resource){
    return $resource('http://www.asterank.com/api/kepler?query={%22PER%22:{%22$lt%22:1.02595675,%20%22$gt%22:0.67125}}&limit=10');
});