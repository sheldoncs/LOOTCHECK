import rootReducer from "./index";

describe("rootReducer", () => {
  it("Initializes the default state", () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});
