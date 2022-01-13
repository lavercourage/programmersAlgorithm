// 문제 주소
// 평균 구하기
// https://programmers.co.kr/learn/courses/30/lessons/12944

// 코드
function solution(arr) {
  let plus = 0;
  for (let i = 0; i < arr.length; i++) {
    plus = plus + arr[i];
  }
  return plus / arr.length;
}
