// 문제 주소
// 자연수 뒤집어 배열로 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12932

// 코드
function solution(n) {
  const result = [];
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    result.push(Number(n[i]));
  }
  result.reverse();
  return result;
}
