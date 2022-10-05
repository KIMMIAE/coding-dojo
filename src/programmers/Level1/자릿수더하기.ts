// https://school.programmers.co.kr/learn/courses/30/lessons/12931
function solution12931(n: number) {
    let nums = String(n).split('');
    let answer = nums.reduce((acc, curr) => {
        return acc + Number(curr);
    }, 0);

    return answer;
}