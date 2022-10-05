// https://school.programmers.co.kr/learn/courses/30/lessons/12916
function solution12916(s: string) {
    let convertedS = s.toLowerCase();
    let arrOfY = convertedS.split('y');
    let arrOfP = convertedS.split('p');

    return arrOfY.length === arrOfP.length;
}