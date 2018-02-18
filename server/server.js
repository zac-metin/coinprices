var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var coinprices = require('./routes/coinprice')

var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/coinprices/', coinprices)

module.exports = function(db) {
  return server
}
