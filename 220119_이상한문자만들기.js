// 문제 주소
// 이상한 문자 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930

// 코드
function solution(s) {
  let answer = "";
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      idx = 0;
      answer += " ";
    } else {
      answer =
        answer + (idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase());
      idx += 1;
    }
  }
  return answer;
}
