const fs = require('fs');

// Read data from file synchonusly
let data = fs.readFileSync('source.txt')


// Write data to file asynchronously
fs.writeFile('destination.txt', data, function (err) {
    if (err) console.log(err)
    console.log('Success');
})