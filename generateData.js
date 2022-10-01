const fs = require('fs');

for (let k = 0; k <= 1000; k++) {
    for (let i = 0; i <= 1000; i++) {
        fs.writeFileSync('source.txt', (i * k) + ' - Web and internet programming CSE471.1 \n', function (err) {
            if (err) console.log(err)
            console.log('Success');
        })
    }
}
