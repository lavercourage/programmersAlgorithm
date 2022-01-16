// 문제 주소
// 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917

// 코드
function solution(s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }

  arr.sort((a, b) => {
    // 배열을 내림차순으로 정렬하는 식
    return a > b ? -1 : 1;
  });

  return arr.join("");
}

// 코드2
function solution(s) {
  let answer = "";
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }

  arr.sort().reverse();

  return arr.join("");
}

// 코드3
function solution(s) {
  return s
    .split("")
    .sort((a, b) => (a > b ? -1 : 1))
    .join("");
}
