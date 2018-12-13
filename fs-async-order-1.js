//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
//All file system operations have synchronous and asynchronous forms.

const fs = require('fs');

//The asynchronous form always takes a completion callback as its last argument. 
//The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. 
//If the operation was completed successfully, then the first argument will be null or undefined.
//There is no guaranteed ordering when using asynchronous methods. 
//So the following is prone to error because the fs.stat() operation may complete before the fs.rename() operation:

fs.rename('./files/hello', './files/world', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});
fs.stat('./files/world', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});

//output:
// C:\Users\Deepika\Desktop\IIHT\NodeJS\projects\fs-async-order.js:17
//   if (err) throw err;
//            ^
// Error: ENOENT: no such file or directory, stat 'C:\Users\Deepika\Desktop\IIHT\NodeJS\projects\files\world'