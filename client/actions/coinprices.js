
export const receiveCoinprices = (coinprices) => {
  return {
    type: 'RECEIVE_COINPRICES',
    coinprices
  }
}

export function getCoinprices() {
  return (dispatch) => {
    var client = new HttpClient();
    client.get('https://api.coinmarketcap.com/v1/ticker/?limit=10', function(res) {

        dispatch(receiveCoinprices(res))
    });

  }
}

var HttpClient = function() {
    this.get = function(aUrl, callback) {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (req.status == 200)
                callback(req.responseText);
        }

        req.open( "GET", aUrl, true );
        req.send(null);
    }
}
