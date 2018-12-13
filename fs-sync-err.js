//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
//All file system operations have synchronous and asynchronous forms.

const fs = require('fs');

//Exceptions that occur using synchronous operations are thrown immediately and may be handled using try/catch, or may be allowed to bubble up.

try {
  fs.unlinkSync('./files/delete.txt');
  console.log('successfully deleted ./files/delete.txt');
} catch (err) {
  // handle the error
  throw err;
}

//output:
// C:\Users\Deepika\Desktop\IIHT\NodeJS\projects\fs-sync-err.js:13
//   throw err;
//   ^
// Error: ENOENT: no such file or directory, unlink '/tmp/hello'
//     at Object.unlinkSync (fs.js:949:3)
//     at Object.<anonymous> (C:\Users\Deepika\Desktop\IIHT\NodeJS\projects\fs-sync-err.js:9:6)
//     at Module._compile (internal/modules/cjs/loader.js:688:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
//     at Module.load (internal/modules/cjs/loader.js:598:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:529:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
//     at startup (internal/bootstrap/node.js:285:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:739:3)