# RANDGEN
[![Build Status](http://img.shields.io/travis/mohayonao/randgen.svg?style=flat-square)](https://travis-ci.org/mohayonao/randgen)
[![NPM Version](http://img.shields.io/npm/v/@mohayonao/randgen.svg?style=flat-square)](https://www.npmjs.org/package/@mohayonao/randgen)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> simple random generator

## Installation

```
npm install @mohayonao/randgen
```

## API
### RandGen
- `constructor([ seed: number ])`

#### Instance attributes
- `random(): number`

## Examples

```js
import RandGen from "@mohayonao/randgen";

function sample(list, rand = Math.random) {
  return list[(rand() * list.length)|0];
}

let rand = new RandGen(123456789).random;
let list = [ 1, 2, 3, 4, 5 ];

console.log(sample(list, rand)); // 5
console.log(sample(list, rand)); // 3
console.log(sample(list, rand)); // 2
```

## License
MIT
