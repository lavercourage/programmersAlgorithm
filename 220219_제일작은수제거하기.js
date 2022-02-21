// 문제 주소
// 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935

// 코드
const solution = (arr) => {
  // 제일 작은 수를 저장해주는 변수
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
