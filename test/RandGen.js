import assert from "power-assert";
import RandGen from "../src/RandGen";

const SEED = (Math.random() * 4294967296) >>> 0;

describe("RandGen", () => {
  describe("constructor(i1: number, i2: number)", () => {
    it("works", () => {
      let rand = new RandGen();

      assert(rand instanceof RandGen);
    });
  });
  describe(".createInstance(seed: number): RandGen", () => {
    it("works", (done) => {
      let rand1 = RandGen.createInstance(SEED);

      setTimeout(() => {
        let rand2 = RandGen.createInstance(SEED);

        assert(rand1 instanceof RandGen);
        assert(rand2 instanceof RandGen);
        assert(rand1 !== rand2);
        assert(rand1.random() === rand2.random());

        done();
      }, 10);
    });
    it("works without seed", (done) => {
      let rand1 = RandGen.createInstance();

      setTimeout(() => {
        let rand2 = RandGen.createInstance();

        assert(rand1 instanceof RandGen);
        assert(rand2 instanceof RandGen);
        assert(rand1 !== rand2);
        assert(rand1.random() !== rand2.random());

        done();
      }, 0);
    });
  });
  describe("#intGenerator(): number", () => {
    it("works", () => {
      let rand1 = RandGen.createInstance(SEED);
      let rand2 = RandGen.createInstance(SEED);

      assert(rand1.intGenerator() === rand2.intGenerator() >>> 0);
      assert(rand1.intGenerator() === rand2.intGenerator() >>> 0);
      assert(rand1.intGenerator() === rand2.intGenerator() >>> 0);
      assert(rand1.intGenerator() === rand2.intGenerator() >>> 0);
      assert(rand1.intGenerator() === rand2.intGenerator() >>> 0);
    });
  });
  describe("#doubleGenerator(): number", () => {
    it("works", () => {
      let rand1 = RandGen.createInstance(SEED);
      let rand2 = RandGen.createInstance(SEED);

      assert(rand1.doubleGenerator() === rand2.doubleGenerator());
      assert(rand1.doubleGenerator() === rand2.doubleGenerator());
      assert(rand1.doubleGenerator() === rand2.doubleGenerator());
      assert(rand1.doubleGenerator() === rand2.doubleGenerator());
      assert(rand1.doubleGenerator() === rand2.doubleGenerator());
      assert(0 <= rand1.doubleGenerator() && rand2.doubleGenerator() < 1);
      assert(0 <= rand1.doubleGenerator() && rand2.doubleGenerator() < 1);
      assert(0 <= rand1.doubleGenerator() && rand2.doubleGenerator() < 1);
      assert(0 <= rand1.doubleGenerator() && rand2.doubleGenerator() < 1);
      assert(0 <= rand1.doubleGenerator() && rand2.doubleGenerator() < 1);
    });
  });
  describe("#random(): number", () => {
    it("works", () => {
      let rand1 = RandGen.createInstance(SEED);
      let rand2 = RandGen.createInstance(SEED);

      assert(rand1.random === rand1.doubleGenerator);
      assert(rand2.random === rand2.doubleGenerator);

      rand1 = rand1.random;
      rand2 = rand2.random;

      assert(rand1 !== rand2);
      assert(rand1() === rand2());
      assert(rand1() === rand2());
      assert(rand1() === rand2());
      assert(rand1() === rand2());
      assert(rand1() === rand2());
    });
  });
});
