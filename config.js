module.exports = {
    host: 'http://localhost',
    port: process.env.PORT || 3000,
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/shorturls',
    SECRET_TOKEN: 'dreamcatcher12345*'
  }
  