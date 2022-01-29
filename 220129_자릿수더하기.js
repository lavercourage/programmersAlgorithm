// 문제 주소
// 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

// 코드
function solution(n) {
  let result = 0;

  String(n)
    .split("")
    .forEach((num) => {
      result = result + Number(num);
    });

  return result;
}
