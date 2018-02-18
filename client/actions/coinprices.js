
export const receiveCoinprices = (coinprices) => {
  return {
    type: 'RECEIVE_COINPRICES',
    coinprices
  }
}

export function getCoinprices() {
  return (dispatch) => {
    var client = new HttpClient();
    client.get('https://api.coinmarketcap.com/v1/ticker/?limit=1000', function(res) {
      dispatch(receiveCoinprices(res))
    });

  }
}

var HttpClient = function() {
    this.get = function(aUrl, callback) {
        var req = new XMLHttpRequest();
        req.responseType = 'json';
        req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200)
                callback(req.response);
        }

        req.open( "GET", aUrl, true );
        req.send(null);
    }
}
