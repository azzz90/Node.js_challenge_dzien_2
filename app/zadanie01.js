//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) =>{
  if (err === null){
    console.log('śmiga', data);
    let dataParsed = JSON.parse(data);
    let result = dataParsed.reduce((a,b) => a+b,0)
    //console.log(result);

    fs.writeFile('./data/zadanie01/sum.txt', result, err => {
      if (err === null){
        console.log('zapisano',result);
      } else {
        console.log('zapis nieudany', err);
      }
    })
  } else {
    console.log('nie śmiga', err);
  }
})
