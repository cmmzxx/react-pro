'use strict'
function test(num) {
  if (num < 1) {
    return 1
  }
  return num + arguments.callee(num - 1) 
}
console.log(test(100))
