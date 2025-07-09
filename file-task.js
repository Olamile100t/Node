const fs = require('fs');

// Create file "welcome.txt" with content
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read file and log content
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
