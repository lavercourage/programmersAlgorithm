// 문제 주소
// 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

// 코드
const mathAnswer = [
  // 1번
  [1, 2, 3, 4, 5],
  // 2번
  [2, 1, 2, 3, 2, 4, 2, 5],
  // 3번
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const score = [0, 0, 0]; // 점수

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < mathAnswer.length; l++) {
      if (mathAnswer[l][i % mathAnswer[l].length] === answers[i]) {
        score[l]++;
      }
    }
  }

  const biggest = Math.max(...score);
  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (biggest === score[i]) {
      result.push(i + 1);
    }
  }
  return result;
}

// 기타
// 문제부더 다시 천천히 읽고 for문 내에 for문 재사용에 대해서 왜 그런지 생각해보기
// 한번 더 생각해보자

// 또 살짝 헷갈린 배열 표기에 대해 되짚어보기!!
// mathAnswer 의 배열 안에 여러 배열이 들어있음
// 위의 코드에서는 mathAnswer 변수를 생각하면 됨
// mathAnswer[i][l] => mathAnswer 배열의 [i]번째 배열의 [l]의 위치의 값 => mathAnswer[0][1] => 2
