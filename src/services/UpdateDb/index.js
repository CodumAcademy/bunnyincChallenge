import sqlite3 from 'sqlite3'

class AppDB {
  constructor() {
    this.db = new sqlite3.Database(':memory:', (err) => {
      if (err) {
        console.log('Could not connect to database', err)
      } else {
        console.log('Connected to the in-memory SQlite database.');
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
