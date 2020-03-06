const neatCsv = require('neat-csv');
const fs = require('fs')

fs.readFile('./resource/gmm_data.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(await neatCsv(data))
})

console.log("check")