import { readdir } from 'fs';
 
readdir("./textos", (err: Error, files: string[]) => {
  console.log(files)
})

// myPromise = new Promise((response, reject) => {
//   const handleFileRead = (err: Error, data: Buffer) => {
//     try {

//     } catch (e) {
//       reject(err)
//     }
//   }
// })