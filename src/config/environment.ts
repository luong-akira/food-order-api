require('dotenv').config();
module.exports = {
  development: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'refer',
    password: process.env.DB_PASSWORD || 'Refer@2021!#',
    database: process.env.DB_NAME || 'refer',
    db_port: process.env.DB_PORT || 3306,
    port: process.env.PORT || 3001,
  },
  test: {
    port: 3000,
  },
  production: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    db_port: process.env.DB_PORT,
    port: process.env.PORT,
  },
};
