// 문제 주소
// 문자열 다루기 기본
// https://programmers.co.kr/learn/courses/30/lessons/12918

// 코드
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const answer = s.split("").filter((str) => isNaN(str) === true).length === 0;
  return answer;
}
