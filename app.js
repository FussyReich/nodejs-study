'use strict';
function fib(n) {
  if (n === 0) {
    return 0; //0の時は0を返す
  } else if (n === 1) {
    return 1; //1の時は1を返す
  }
  return fib(n - 1) + fib(n - 2); //ここで再帰している
}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}