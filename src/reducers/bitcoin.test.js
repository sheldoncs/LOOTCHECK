import bitcoinReducer from "./bitcoin";
import * as actionTypes from "../actions/constants";

describe("bitcoinReducer", () => {
  const bitcoinData = { bpi: "bitcoin price index" };
  it("fetches and sets the bitcoin data", () => {
    expect(
      bitcoinReducer(
        {},
        { type: actionTypes.FETCH_BITCOIN, bitcoin: bitcoinData }
      )
    ).toEqual(bitcoinData);
  });
});
