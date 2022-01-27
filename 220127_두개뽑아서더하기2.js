// 문제 주소
// 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644

// 코드
function solution(numbers) {
  let answer = [];

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1, numbers.length).forEach((num2) => {
      const sum = num1 + num2;

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    });
  });
  return answer.sort((a, b) => a - b);
}
