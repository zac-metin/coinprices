var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')
var coinpricesDb = require('../../server/db/coinprice')
var setupDb = require('./setup-db')

setupDb(test,createServer)

test.cb('GET /', t => {
  request(t.context.app)
    .get('/api/coinprices')
    .expect(200)
    .end((err,res) => {
      if (err) console.log(err);
      t.is(res.body.length, 3)
      t.end()
    })
})

test.cb('read coinprices db', t => {
  coinpricesDb.getGreetings(t.context.db)
    .then(coinprices => {
      t.is(coinprices.length, 3)
      t.true(coinprices[0].hasOwnProperty('text'))
      t.end()
    })
})
