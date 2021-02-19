module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "caniada",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "8889"
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
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": "caniadagrupo6_db",
    "host": "mysql-caniadagrupo6.alwaysdata.net",
    "dialect": "mysql"
  }
}
