import sqlite3 from 'sqlite3'
import path from 'path'

const pathDb = path.resolve(__dirname, '../Migrations/visitors.db')

class AppDB {
  constructor() {
    this.db = new sqlite3.Database(pathDb, (err) => {
      if (err) {
        console.log('Error en la conexión', err)
      } else {
        console.log('Sentencia Ejecutada.');
      }
    })
  }

  run(sql, params = []) {
      return new Promise((resolve, reject) => {
        this.db.run(sql, params, function (err) {
          if (err) {
            console.log('Error running sql ' + sql)
            console.log(err)
            reject(err)
          } else {
            resolve({ id: this.lastID })
          }
        })
      })
  }
}
let updateDb = new AppDB();

export default updateDb
