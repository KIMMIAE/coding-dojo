// https://school.programmers.co.kr/learn/courses/30/lessons/12932
function solution12932(n: number) {
    let nums = String(n).split('');
    let answer = nums.reverse().map((num) => {
        return parseInt(num)
    });
    return answer;
}