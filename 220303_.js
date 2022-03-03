// 문제 주소
// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

// 코드
const solution = (participant, completion) => {
  let answer = "";

  participant.sort((a, b) => (a < b ? -1 : 1));
  completion.sort((a, b) => (a < b ? -1 : 1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];

      return answer;
    }
  }
};

// 기타

// 문자열을 오름차순으로 정렬
// 문자열의 오름차순일 경우 인자는 생략될 수 있다.

// 함수 내에서 for문 사용했을 때
// return 사용하면 break함 그리고 값 내줌

// 조금 더 생각해보자
