import React from "react";
import { shallow, configure } from "enzyme";
import App from "./App";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("App", () => {
  const app = shallow(<App />);
  it("renders properly", () => {
    expect(app).toMatchSnapshot();
  });
  it("Contains a connected wallet component", () => {
    expect(app.find("Connect(Wallet)").exists()).toBe(true);
  });
  it("Contains a connected Loot Component", () => {
    expect(app.find("Connect(Loot)").exists()).toBe(true);
  });
});
