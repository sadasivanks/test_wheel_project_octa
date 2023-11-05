//page implimented by sadasivan

var cluster = require('cluster');

if (cluster.isMaster) {
  // Count the machine's CPUs
  var cpuCount = require('os').cpus().length;
    console.log(cpuCount)

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    console.log("new worker")

    cluster.fork();
  }

  // Listen for dying workers
  cluster.on('exit', function () {
    cluster.fork();
  });
} else {
  require('./bin/www');
}


//functions ends here