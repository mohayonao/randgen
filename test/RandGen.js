import assert from "power-assert";
import RandGen from "../src/RandGen";

const SEED = (Math.random() * 4294967296) >>> 0;

describe("RandGen", () => {
  describe("constructor([ seed: number ])", () => {
    it("works", (done) => {
      let rand1 = new RandGen(SEED);

      setTimeout(() => {
        let rand2 = new RandGen(SEED);

        assert(rand1 instanceof RandGen);
        assert(rand2 instanceof RandGen);
        assert(rand1 !== rand2);
        assert(rand1.random() === rand2.random());

        done();
      }, 10);
    });
    it("works without seed", (done) => {
      let rand1 = new RandGen();

      setTimeout(() => {
        let rand2 = new RandGen();

        assert(rand1 instanceof RandGen);
        assert(rand2 instanceof RandGen);
        assert(rand1 !== rand2);
        assert(rand1.random() !== rand2.random());

        done();
      }, 10);
    });
  });
  describe("#random(): number", () => {
    it("works", () => {
      let rand1 = new RandGen(SEED);
      let rand2 = new RandGen(SEED);

      assert(rand1.random() === rand2.random());
      assert(rand1.random() === rand2.random());
      assert(rand1.random() === rand2.random());
      assert(rand1.random() === rand2.random());
      assert(rand1.random() === rand2.random());
      assert(0 <= rand1.random() && rand2.random() < 1);
      assert(0 <= rand1.random() && rand2.random() < 1);
      assert(0 <= rand1.random() && rand2.random() < 1);
      assert(0 <= rand1.random() && rand2.random() < 1);
      assert(0 <= rand1.random() && rand2.random() < 1);
    });
    it("works as function", () => {
      let rand1 = new RandGen(SEED);
      let rand2 = new RandGen(SEED).random;

      assert(rand1.random() === rand2());
      assert(rand1.random() === rand2());
      assert(rand1.random() === rand2());
      assert(rand1.random() === rand2());
      assert(rand1.random() === rand2());
      assert(0 <= rand1.random() && rand2() < 1);
      assert(0 <= rand1.random() && rand2() < 1);
      assert(0 <= rand1.random() && rand2() < 1);
      assert(0 <= rand1.random() && rand2() < 1);
      assert(0 <= rand1.random() && rand2() < 1);
    });
  });
});
