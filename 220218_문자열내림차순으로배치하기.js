// 문제 주소
// 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917

// 코드
const solution = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  arr.splice(arr.indexOf(min), 1);
  if (arr.length === 0) {
    return [-1];
  }

  return arr;
};
