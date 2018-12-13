//The fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
//All file system operations have synchronous and asynchronous forms.

const fs = require('fs');

//The asynchronous form always takes a completion callback as its last argument. 
//The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. 
//If the operation was completed successfully, then the first argument will be null or undefined.
//There is no guaranteed ordering when using asynchronous methods. 
//To correctly order the operations, move the fs.stat() call into the callback of the fs.rename() operation:

fs.rename('./files/hello', './files/world', (err) => {
  if (err) throw err;
  fs.stat('./files/world', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});

//output:
// stats: {
// 	"dev": 2432418166,
// 	"mode": 33206,
// 	"nlink": 1,
// 	"uid": 0,
// 	"gid": 0,
// 	"rdev": 0,
// 	"ino": 8725724278050509,
// 	"size": 0,
// 	"atimeMs": 1544585824349,
// 	"mtimeMs": 1544588123681,
// 	"ctimeMs": 1544588143539.5615,
// 	"birthtimeMs": 1544585824349.0474,
// 	"atime": "2018-12-12T03:37:04.349Z",
// 	"mtime": "2018-12-12T04:15:23.681Z",
// 	"ctime": "2018-12-12T04:15:43.540Z",
// 	"birthtime": "2018-12-12T03:37:04.349Z"
// }