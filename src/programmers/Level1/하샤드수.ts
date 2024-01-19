// https://school.programmers.co.kr/learn/courses/30/lessons/12947
function solution12947(x: number) {
    let nums = String(x).split('');
    let sum = nums.reduce((acc, curr) => {
        return acc + parseInt(curr);
    }, 0)

    return x % sum === 0 ? true : false;
}
