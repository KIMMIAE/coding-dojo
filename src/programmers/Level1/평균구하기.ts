// https://school.programmers.co.kr/learn/courses/30/lessons/12944
function solution12944(arr: number[]) {
    let sum = 0;
    arr.forEach((num) => {
        sum += num;
    });
    let answer = sum / arr.length;
    return answer;
}