var http = require('http');
var fs = require('fs');
var https = require('https');

var optionsSsl = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};
const PORT=8080;

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;

    https.createServer(optionsSsl, function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(PORT);

    // http.createServer(function(request, response) {
    //     response.writeHeader(200, {"Content-Type": "text/html"});
    //     response.write(html);
    //     response.end();
    // }).listen(PORT);
});