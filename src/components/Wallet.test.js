import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Wallet } from "./wallet";

configure({ adapter: new Adapter() });

describe("Wallet", () => {
  const mockDeposit = jest.fn();
  const mockWithdrawal = jest.fn();
  const props = {
    balance: 20,
    deposit: mockDeposit,
    withdrawal: mockWithdrawal,
  };
  const wallet = shallow(<Wallet {...props} />);

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot();
  });
  it("displays the balance from props", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20");
  });
  it("creates an input to withdraw or deposit to the balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });
  describe("when user types into wallet input", () => {
    const userbalance = "25";
    beforeEach(() => {
      wallet
        .find(".input-wallet")
        .simulate("change", { target: { value: userbalance } });
    });
    it("updates the local wallet balance in `state` and converts it to a number", () => {
      expect(wallet.state().balance).toEqual(parseInt(userbalance, 10));
    });
    describe("when user wants to make a deposit", () => {
      beforeEach(() => {
        wallet.find(".btn-deposit").simulate("click");
      });
      it("it dispatches the `deposit()` it receives from props with local balance", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userbalance, 10));
      });
    });
    describe("when user wants to make a withdrawal", () => {
      beforeEach(() => {
        wallet.find(".btn-withdrawal").simulate("click");
      });
      it("it dispatches the `withdrawal()` it receives from props wit local balance", () => {
        expect(mockWithdrawal).toHaveBeenCalledWith(parseInt(userbalance, 10));
      });
    });
  });
});
