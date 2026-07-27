import fs from 'fs'; // <-- Change this line!

// fs.writeFile("newfile.text", "hello fron node", (err) => {
//     if (err) throw err;
//     console.log("gfehdfhf");
// });
// fs.readFile("./message.txt","utf8",(err, data)=>{
//     if(err) throw err;
//     console.log(data);
// });
import generateName from "sillyname";
var name=generateName();
console.log("my name is ${name}"); // ❌ Using double quotes