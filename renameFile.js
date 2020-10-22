const { UV_FS_O_FILEMAP } = require('constants');
var fs = require('fs');

fs.rename('newFile1.txt', 'renamedFile.txt', function(err) {
    if(err) throw err;
    console.log('File Renamed');
})