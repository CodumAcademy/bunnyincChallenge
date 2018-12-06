import csvParse from 'csv-parser'
import fs from 'fs'
import path from 'path'
import db from './services/UpdateDb'


const pathCsv = path.resolve(__dirname, './files/visitors.csv')

var csvData=[];

fs.createReadStream(pathCsv)
    .pipe(csvParse({delimiter: ','}))
    .on('data', function(csvrow) {
        csvData.push(csvrow)
    })
    .on('end',function() {
      for (let i = 0; i < csvData.length; i++) {
          db.run(`INSERT INTO visitors (email, name, phone) VALUES ('${csvData[i].email}','${csvData[i].name}', '${csvData[i].phone}')`)
          console.log(`Registro # ${i} insertado`, csvData[i])
      }
    })
