var exec = require('child_process').exec,
	port = process.argv[2] || 8089,
    childServer, childOF;

childServer = exec('http-server -c -1 -p ' + port,
  function (error, stdout, stderr) {
  	console.log('stdout: ' + stdout);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

childOF = exec('openfin -l -u http://localhost:'+port+'/index.html',
  function (error, stdout, stderr) {
  	console.log('stdout: ' + stdout);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
 