
const fs = require('fs');

const writeStream = fs.createWriteStream('./file.txt');

writeStream.write('Some Data');
writeStream.write('Was written');
writeStream.write('\n');
writeStream.write('to check streams');

writeStream.end();
