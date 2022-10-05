// https://school.programmers.co.kr/learn/courses/30/lessons/12934
function solution12934(n: number) {
    let squareRoot = Math.sqrt(n);
    return (squareRoot % 1 !== 0) ? -1 : Math.pow(squareRoot + 1, 2);
}