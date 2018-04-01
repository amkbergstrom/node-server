const express = require('express');
const url = require('url');
const bodyParser = require('body-parser');

const app = express();

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/test', function(request, response) {
    console.log('test request');

    var parsedUrl = url.parse(request.url, true);
    var reqObj  = parsedUrl.query;

    var responseVal = {
        request: parsedUrl
    };

    response.write(JSON.stringify(responseVal));
    response.end();
});

app.get('/', function(request, response) {
    console.log('base url request');

    var parsedUrl = url.parse(request.url, true);
    var reqObj  = parsedUrl.query;

    var responseVal = {
        request: parsedUrl
    };

    response.write(JSON.stringify(responseVal));
    response.end();
});

app.listen(3000);
