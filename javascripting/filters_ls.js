var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback (err, list) {
  // console.log(list);
  for (i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === ('.' + process.argv[3])) {
      console.log(list[i]);
    }
  }
});

/* And, again, the "right way"

 var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
    })

*/
