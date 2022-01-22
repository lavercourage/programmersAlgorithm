// 문제 주소
// 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644

// 코드
function solution(numbers) {
  let answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
