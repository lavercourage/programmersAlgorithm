// 문제 주소
// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

// 코드
const solution = (participant, completion) => {
  let answer = "";
  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  // 초기값을 false로 설정
  // 참가자를 찾았을 때 true로 변환
  let stop = false;
  participant.forEach((name, i) => {
    // stop 이 false 일 때만 실행하기
    if (name !== completion[i] && stop === false) {
      answer = name;
      stop = true;
    }
  });

  return answer;
};

// 기타
