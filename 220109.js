// 문제 주소
// 핸드폰 번호 가리기
// https://programmers.co.kr/learn/courses/30/lessons/12948

// 코드
function solution(phone_number) {
  let answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer = answer + "*";
    } else {
      answer = answer + phone_number[i];
    }
  }
  return answer;
}
