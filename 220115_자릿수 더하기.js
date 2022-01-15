// 문제 주소
// 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

// 코드
function solution(n) {
  let answer = 0;
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    answer = answer + Number(n[i]);
  }
  return answer;
}
