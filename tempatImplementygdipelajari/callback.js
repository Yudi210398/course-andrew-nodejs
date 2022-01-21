// ! synchronus Callback

/* 

const data = function (nama) {
  console.log(`Hai nama saya ${nama}`);
};

const panggilCb = function (name) {
  data(name);
};

panggilCb(`Hana Safira`);

*/

// ! anyschronus callback
/* 

let cbAnys = function (sex, cb) {
  setTimeout(() => {
    const dataAPI = {
      nama: `Yudi`,
      umur: 23,
      sex: sex,
    };
    cb(dataAPI);
  }, 1000);
};

let hasil = cbAnys(`Laki - Laki`, (data) => {
  console.log(data);
});

*/

const add = function (a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 2000);
};

add(4, 3, (result) => console.log(result));
