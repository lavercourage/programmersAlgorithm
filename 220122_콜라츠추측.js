// 문제 주소
// 콜라츠추측
// https://programmers.co.kr/learn/courses/30/lessons/12943

// 코드
function solution(num) {
  let count = -1;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      count = i;
      break;
    }
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
  }
  return count;
}
