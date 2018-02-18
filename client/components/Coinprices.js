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
    let filteredCoins = this.filterCoins(coinprices);
    this.setState({coinprices: coinprices});
  }

  filterCoins(coinprices) {
    return coinprices;
  }

  render () {
    console.log(this.state.coinprices);
    return (
      <div>
      {this.state.coinprices.map((coin, idx) => <h1 key={idx}>{coin}</h1>)}
      <p>Coinprices</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {coinprices: state.coinprices}

}

export default connect(mapStateToProps)(Coinprices)
