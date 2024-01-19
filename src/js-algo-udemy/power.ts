/**
 * power
 * 밑과 지수를 받아들이는 power라는 함수를 작성합니다. 이 함수는 밑의 거듭제곱을 지수로 반환해야 합니다. 이 함수는 Math.pow()의 기능을 모방해야 합니다. 음의 밑과 지수에 대해서는 신경쓰지 마세요.
 */

function power(base: number, exponent: number) {
  let result = 1;
  function helper(base: number, exponent: number) {
    if (exponent <= 0) {
      return;
    }
    result = result * base;
    exponent--;
    helper(base, exponent);
  }
  helper(base, exponent);
  return result;
}