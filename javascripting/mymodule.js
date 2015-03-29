var fs = require('fs')
var path = require('path')

module.exports = function (arg1, arg2, arg3) { 

  fs.readdir(arg1, function (err, list) {

    if (err) {
      return arg3(err);
    }

    myarray = [];
    list.forEach(function (file) {
      if (path.extname(file) === '.' + arg2)
        myarray.push(file);
    })
   
    console.log(myarray);
 
    return arg3(null, myarray);
  })
}
