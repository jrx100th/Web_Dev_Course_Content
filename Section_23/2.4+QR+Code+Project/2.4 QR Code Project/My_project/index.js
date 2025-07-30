/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import {input} from '@inquirer/prompts';
import {
    writeFile,
    createWriteStream,
}  from "fs";
import {
    image,
    imageSync
} from "qr-image";

const answer = await input({
    message : "Enter the web address : "
});

writeFile("Site.txt",answer,(err)=>{
    if (err) throw err;
    console.log("file is saved");
});

var qr_png = image(answer,{type : 'png'});
qr_png.pipe(createWriteStream("QR.png"));