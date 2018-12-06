import db from '../UpdateDb'

let dropTableQuery = `DROP TABLE IF EXISTS visitors;`
let createTablequery = `CREATE TABLE \`visitors\` (
  \`id\`  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  \`email\` TEXT NOT NULL UNIQUE,
  \`name\`  TEXT NOT NULL,
  \`phone\` TEXT NOT NULL
);`
db.run(dropTableQuery).then(() => {
  return db.run(createTablequery)
})