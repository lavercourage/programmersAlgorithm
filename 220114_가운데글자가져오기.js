// 문제 주소
// 가운데 글자 가져오기
// https://programmers.co.kr/learn/courses/30/lessons/12903

// 코드
function solution(s) {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
}
