const fs = require('fs');

function readFileContents(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}
const filePath = 'sampletext.txt';
readFileContents(filePath, (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('File contents:', data);
  }
});
