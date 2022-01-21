const fs = require("fs");

// ! cara memindahkan file JSON ke file lain
/* 
const Personnn = {
  nama: `Hana Safira`,
  umur: 19,
  pekerjaan: `Mahasiswa`,
};

//! convert object menjadi string JSON
let stringsConverts = JSON.stringify(Personnn);
console.log(stringsConverts);

// ! Cara mengembalikan Object dari JSON STRING

let getBackObject = JSON.parse(stringsConverts);
console.log(getBackObject.pekerjaan);

// ! kalo mau ngrim Format JSON, JSON Harus di convert  dan berupa Strings
fs.writeFileSync("json.json", stringsConverts);

*/
// ! Cara Mengambil data JSON dari file lain

/* 
const buferdata = fs.readFileSync(`json.json`).toString();
let data = JSON.parse(buferdata);
console.log(data.umur);

*/

const buferData = fs.readFileSync("json.json").toString();
let data = JSON.parse(buferData);
data.name = `Yudi Runat`;
data.planet = `Bumi`;
data.age = 22;

let dataStrings = JSON.stringify(data);

fs.writeFileSync("json.json", dataStrings);
