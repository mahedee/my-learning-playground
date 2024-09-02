const path = require('path');

console.log(path.sep);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute);