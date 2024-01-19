// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num: number): number {
  // add whatever parameters you deem necessary - good luck!  
  let arr = [1, 1];

  function helper(num: number): number {
    if (arr.length < num) {
      let sum = arr[arr.length - 2] + arr[arr.length - 1];
      arr.push(sum);
      helper(num)
    }
    return arr[num - 1];
  }
  let result = helper(num);
  return result;
}

/*
다른 답
function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
*/