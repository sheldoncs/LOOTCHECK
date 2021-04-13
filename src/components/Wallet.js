import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/balance";

/*Export unconnected component to pass test*/
export class Wallet extends Component {
  state = { balance: undefined };
  updateBalance = (event) => {
    this.setState({ balance: parseInt(event.target.value, 10) });
  };
  deposit = () => {
    this.props.deposit(this.state.balance);
  };
  withdraw = () => {
    this.props.withdrawal(this.state.balance);
  };
  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <input className="input-wallet" onChange={this.updateBalance} />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button className="btn-withdrawal" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    balance: state.balance,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deposit: (balance) => dispatch(actions.deposit(balance)),
    withdrawal: (balance) => dispatch(actions.withdrawal(balance)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
// export default Wallet;
