var fs = require('fs');

function getFileAsync (err, data) {
  if (!err) {
    console.log(data.split('\n').length - 1);
  }
  else {
    console.log("D'oh, async is hard.");
  }
}

fs.readFile(process.argv[2], 'utf8', getFileAsync)

// Again, here's the nicer way to do it:
/*
 var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })

*/
