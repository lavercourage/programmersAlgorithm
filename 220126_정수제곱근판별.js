// 문제 주소
// 정수 제곱근 판별
// https://programmers.co.kr/learn/courses/30/lessons/12934

// 코드
function solution(n) {
  let result = -1;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      result = i + 1;
      return result * result;
    }
  }
  return result;
}

// 코드2
function solution(n) {
  let num = 1;
  while (num * num < n) {
    num++;
  }
  return num * num === n ? (num + 1) * (num + 1) : -1;
}
