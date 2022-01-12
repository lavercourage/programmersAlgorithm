// 문제 주소
// 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906

// 코드
function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
