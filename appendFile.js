var fs = require('fs');

fs.appendFile('newFile1.txt', 'Hello Content', function(err) {
    if(err)
        throw err;
    console.log('Saved!');
});