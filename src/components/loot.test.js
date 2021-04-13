import React from "react";
import { mount, shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// import Adapter from "enzyme-adapter-react-16";
import { Loot } from "./loot";

configure({ adapter: new Adapter() });
configure({ disableLifecycleMethods: true });

describe("Loot", () => {
  let mockFetch = jest.fn();
  let props = {
    balance: 10,
    bitcoin: {},
  };

  let loot = shallow(<Loot {...props} />);
  it("renders properly", () => {
    expect(loot).toMatchSnapshot();
  });

  describe("when mounted", () => {
    beforeEach(() => {
      props.bitcoinFetch = mockFetch();
      loot = shallow(<Loot {...props} />);
    });
    it("dispatches the `fetchBitcoin()` method it receives from props", () => {
      expect(mockFetch).toHaveBeenCalled();
    });
  });
  describe("when there are valid bitcoin props", () => {
    beforeEach(() => {
      props = {
        balance: 10,
        bitcoin: { bpi: { USD: { rate: "1,000" } } },
      };
      loot = shallow(<Loot {...props} />);
    });
    it("displays the correct bitcoin value", () => {
      expect(loot.find("h3").text()).toEqual("Bitcoin Balance: 0.01");
    });
  });
});
