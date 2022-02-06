// 문제 주소
// 하샤드 수
// https://programmers.co.kr/learn/courses/30/lessons/12947

// 코드
function solution(x) {
  x = x.toString();
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return x % sum === 0 ? true : false;
}
