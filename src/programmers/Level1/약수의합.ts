// https://school.programmers.co.kr/learn/courses/30/lessons/12928
function solution12928(n: number) {

    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            sum += i
        }
    }
    return sum;
}