"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
fs_1.readdir("./textos", function (err, files) {
    console.log(files);
});
// myPromise = new Promise((response, reject) => {
//   const handleFileRead =  (err: Error, data: Buffer) => {
//     try {
//     } catch (e) {
//       reject(err)
//     }
//   }
// })
