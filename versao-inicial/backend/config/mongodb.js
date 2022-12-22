const mongoose = require('mongoose')
const { mongo } = require('../.env')

mongoose.connect(mongo.url, { useNewUrlParser: true })
  .catch( err => {
    const msg = `ERROR MONGO CONECT: ${err}`
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
  })