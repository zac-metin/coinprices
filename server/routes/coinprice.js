var express = require('express')
var router = express.Router()

var baseURL = "https://api.coinmarketcap.com/"

router.get('/', (req, res) => {
  request
      .get(`${baseURL}/v1/ticker/`)
      .set('Accept', 'application/json')
      .end((error, response) => {
        error ? res.send(error) : res.json(response.body)
      });
  })

module.exports = router
