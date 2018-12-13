//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
//All file system operations have synchronous and asynchronous forms.

const fs = require('fs');

//The asynchronous form always takes a completion callback as its last argument. 
//The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. 
//If the operation was completed successfully, then the first argument will be null or undefined.

fs.unlink('./files/delete.txt', (err) => {
    if (err) throw err;
    console.log('successfully deleted ./files/delete.txt');
  });

  //output:

//   C:\Users\Deepika\Desktop\IIHT\NodeJS\projects\fs-async-err.js:5
//     if (err) throw err;
//              ^

// Error: ENOENT: no such file or directory, unlink 'C:\Users\Deepika\Desktop\IIHT\NodeJS\projects\files\delete.txt'