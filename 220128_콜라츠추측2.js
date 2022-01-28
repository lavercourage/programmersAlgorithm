// 문제 주소
// 콜라츠추측
// https://programmers.co.kr/learn/courses/30/lessons/12943

// 코드
function solution(num) {
  let count = 0;

  // 조건식 true일 때 반복문 실행
  while (num !== 1) {
    if (count >= 500) {
      return -1;
    }
    count = count + 1;
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
  }
  return count;
}
