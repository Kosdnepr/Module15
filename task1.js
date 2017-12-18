var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {

	if(req.url === '/stream') {

		var stream = fs.createReadStream('demo.txt');
		stream.pipe(res);
		
	} else if (req.url === '/file') {

		fs.readFile('demo.txt', function(err, data) {
			if (err) throw new Error;
			res.write(data);
			res.end();
		});

	} else if (req.url === '/optimal') {

		fs.stat('demo.txt', function(err, stat) {
		    if(stat.size >= 50000000) {
		    	var stream = fs.createReadStream('demo.txt');
				stream.pipe(res);
		    } else {
		    	fs.readFile('demo.txt', function(err, data) {
					if (err) throw new Error;
					res.write(data);
					res.end();
				});
		    }
		});

	} else {

		res.write('<table border="1px"><tr><td><a href="file">Get whole file data</a></td></tr><tr><td><a href="stream">Get data through a stream</a></td></tr><tr><td><a href="optimal">Choose the way of getting data automatically</a></td></tr></table>');
		res.end();

	}

}).listen(3000, function() {
	console.log('On localhost');
});