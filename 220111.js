// 문제 주소
// 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/12928

// 코드
function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer = answer + i;
    }
  }

  return answer;
}

// 코드2
function solution(n) {
  let answer = 0;

  new Array(n).fill(1).forEach((num, index) => {
    n % (num + index) === 0 ? (answer = answer + (num + index)) : null;
  });

  return answer;
}
