// 문제 주소
// 나누어 떨어지는 숫자 배열
// https://programmers.co.kr/learn/courses/30/lessons/12910

// 코드
function solution(arr, divisor) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// 코드2
const answer = arr
  .filter((number) => {
    return number % divisor === 0;
  })
  .sort((a, b) => a - b);

return answer.length === 0 ? [-1] : answer;
