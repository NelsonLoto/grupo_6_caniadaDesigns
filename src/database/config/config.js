require('dotenv').config();


module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": process.env.DB_PORT
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "caniada",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "8889"
  },
  "production": {
    "username": '227510',
    "password": 'grupo6DH',
    "database": "caniadagrupo6_db",
    "host": "mysql-caniadagrupo6.alwaysdata.net",
    "dialect": "mysql"
  }
}
