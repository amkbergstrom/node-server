var http = require('http');

var service = http.createServer(function(request, response){
    console.log('request received');
    
    request

    var responseVal = {
        message: "bla bla",
        results: [
            "foo",
            "bar"
        ]
    };

    response.write(JSON.stringify( responseVal));
    response.end();
});

service.listen(3000);

