// 문제 주소
// x만큼 간격이 있는 n개의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12954

// 코드
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}

// 코드2
function solution(x, n) {
  return new Array(n).fill(x).map((number, index) => {
    return number * (index + 1);
  });
}
