# tiny-compiler [![Build Status](https://travis-ci.org/pixcai/tiny-compiler.svg?branch=master)](https://travis-ci.org/pixcai/tiny-compiler)

A tiny compiler for convert Polish Notation to JavaScript code

## Usage

``` js
const compile = require('./compiler')
const js = compile('(add 3 (sub 2 1))')

console.log(js)
```

## License

GPL-3.0