import React from 'react'
import {connect} from 'react-redux'

import {getCoinprices} from '../actions/coinprices'

class Coinprices extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coinprices: []
    }
  }

  componentWillMount() {
    this.props.dispatch(getCoinprices());
  }

  componentWillReceiveProps({coinprices}) {
    if(coinprices) {
      let filteredCoins = this.filterCoins(coinprices, this.props.match.params.querystring);
      this.setState({coinprices: filteredCoins});
    }
  }

  filterCoins(coinprices, querystring) {
    var selectedCoins = querystring.split("-");
    var filterCoins = coinprices.filter(coin => this.isSelected(coin.id, selectedCoins) || this.isSelected(coin.symbol, selectedCoins))
    return filterCoins;
  }

  isSelected(coin, selectedCoins) {
    return selectedCoins.indexOf(coin) !== -1;
  }

  render () {
    var coinprices = this.state.coinprices;
    console.log(coinprices);
    return (
      <div className="container">
       {coinprices.length > 0 && coinprices.map((coin, idx) =>
         <div><div key={idx} className="row">
          <div className="symbol three columns">{coin.symbol}</div>
          <div className="name six columns">{coin.name}</div>
          <div className="price three columns">{coin.price_usd}</div>
        </div>
        <div className="row">
        <div className="changehr four columns" id={coin.percent_change_1h > 0 ? "green" : "red"}>{coin.percent_change_1h}%</div>
        <div className="changeday four columns" id={coin.percent_change_24h > 0 ? "green" : "red"}>{coin.percent_change_24h}%</div>
        <div className="changeweek four columns" id={coin.percent_change_7d > 0 ? "green" : "red"}>{coin.percent_change_7d}%</div>
       </div></div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {coinprices: state.coinprices}

}

export default connect(mapStateToProps)(Coinprices)
