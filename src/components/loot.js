import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/bitcoin";

export class Loot extends Component {
  state = { bitcoinvalue: 0 };
  componentDidMount() {
    if (this.props.bitcoinFetch()) {
      this.computeBitcoin();
    }
  }
  computeBitcoin() {
    const { bitcoin } = this.props;
    if (Object.keys(bitcoin).length == 0) return "";

    let bitcoinvalue =
      this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(",", ""), 10);
    return bitcoinvalue;
  }
  render() {
    return (
      <div>
        <h3>Bitcoin Balance: {this.computeBitcoin()}</h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { balance: state.balance, bitcoin: state.bitcoin };
};
const mapDispatchToProps = (dispatch) => {
  return {
    bitcoinFetch: () => dispatch(actions.fetchBitcoin()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Loot);
