'use strict'
/**
 * Example:
 * => (add (sub 5 4) (mul 9 (div 6 2)))
 * Convert to JavaScript:
 * => add(sub(5, 4), mul(9, div(6, 2)))
 */
let NUMBER = /[0-9]/
let CHARACTER = /[a-z]/i

/**
 * Tokenizer
 * @param  {String} input
 * @return {Array} tokens
 */
function tokenizer(input) {
  /**
   * expected tokens is:
   * [{ type: 'paren', value: '(' },
   *  { type: 'paren', value: '(' },
   *  { type: 'num', value: /[0-9]+/ },
   *  { type: 'str', value: /[a-z]+/ },
   *  { type: 'func', value: name }]
   */
  let tokens = []

  for (let current = 0, length = input.length; current < length; current++) {
    if (input[current] === '(') {
      tokens.push({
        type: 'paren',
        value: '('
      })
    } else if (input[current] === ')') {
      tokens.push({
        type: 'paren',
        value: ')'
      })
    } else if (NUMBER.test(input[current])) {
      let num = readWhile(current, c => NUMBER.test(c))
      tokens.push({
        type: 'num',
        value: num
      })
      current += num.length
    } else if (input[current] === '\'' || input[current] === '"') {
      let str = readWhile(++current, c => input[current - 1] !== c)
      tokens.push({
        type: 'str',
        value: str
      })
      current += str.length + 1
    } else if (CHARACTER.test(input[current])) {
      let func = readWhile(current, c => CHARACTER.test(c))
      tokens.push({
        type: 'func',
        value: func
      })
      current += func.length
    }
  }

  function readWhile(current, predicate) {
    let value = input[current++]
    while (predicate(input[current])) {
      value += input[current++]
    }
    return value
  }

  return tokens
}

/**
 * Parser
 * @param  {Array} tokens
 * @return {Object} ast
 */
function parser(tokens) {

}

/**
 * CodeGenerator
 * @param  {Object} ast
 * @return {String} source code
 */
function codeGenerator(ast) {

}

function compile(input) {
  let tokens = tokenizer(input)
  let ast = parser(tokens)
  let output = codeGenerator(ast)

  return output
}

module.exports = compile
