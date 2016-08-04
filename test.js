const assert = require('assert')
const compile = require('./compiler')

const input = '(add "result is:" (sub (mul 43 21) 0))'
const output = 'add("result is:", sub(mul(43, 21), 0))'

assert.deepStrictEqual(compile(input), output, 'Compiler internal error!')

console.log('All Passed!')