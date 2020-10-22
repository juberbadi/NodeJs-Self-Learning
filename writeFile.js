var fs = require('fs');

fs.writeFile('newFile3.txt', 'I am Juber', function(err) {
    if(err) throw err;
    console.log('Saved!');
});