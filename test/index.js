import assert from "power-assert";
import index from "../src";
import RandGen from "../src/RandGen";

describe("index", () => {
  it("exports", () => {
    assert(index === RandGen);
  });
});
