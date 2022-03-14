// 문제 주소
// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

// 코드
const solution = (participant, completion) => {
  participant.sort();
  completion.sort();

  const answer = participant.filter((name, x) => {
    return name !== completion[x];
  });
  return answer[0];
};

// 기타
