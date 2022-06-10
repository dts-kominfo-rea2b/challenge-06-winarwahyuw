// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
async function bacaData(fnCallback){
  const files = [file1, file2, file3];
  const resultArray = [];

  try{
    for(let i=0; i<files.length; i++){
      let promise = new Promise((resolve)=>{
        fs.readFile(files[i], (err, data)=>{
          const dataObjects = JSON.parse(data);
          resolve(getData(dataObjects));
        });
      }) ;
      let results = await promise;
      resultArray.push(results);
    }
    
    return fnCallback(null, resultArray);
  }catch (err){
    return fnCallback(err, resultArray);
  }
};

function getData(dataObjects){
  if(dataObjects.message !== undefined){
    return splitWords(dataObjects.message);
  }else if(dataObjects[0].message !==undefined){
    return splitWords(dataObjects[0].message);
  }else{
    return splitWords(dataObjects[0].data.message);
  }
}

function splitWords(words){
  return words.split(' ')[1];
}


// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
