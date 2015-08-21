export default class RandGen {
  constructor(seed = Date.now()) {
    let i1 = seed;
    let i2 = (seed << 16) + (seed >> 16);
    let z = (i1 >>> 0) || 362436069;
    let w = (i2 >>> 0) || 521288629;

    this.random = () => {
      z = (36969 * (z & 65535) + (z >>> 16)) & 0xFFFFFFFF;
      w = (18000 * (w & 65535) + (w >>> 16)) & 0xFFFFFFFF;

      let value = (((z & 0xFFFF) << 16) | (w & 0xFFFF)) >>> 0;

      return value / 4294967296;
    };
  }
}
