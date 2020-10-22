var fs = require('fs');

fs.unlink('newFile3.txt', function(err) {
    if(err) throw err;
    console.log('File Deleted!');
})