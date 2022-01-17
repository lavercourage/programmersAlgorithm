// 문제 주소
// k번째수
// https://programmers.co.kr/learn/courses/30/lessons/42748

// 코드
function solution(array, commands) {
  const answer = commands.map((el) => {
    const sliceResult = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b;
    });
    return sliceResult[el[2] - 1];
  });

  return answer;
}

// 코드2
function solution(array, commands) {
  const answer = commands.map((el) => {
    const sliceResult = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b;
    });
    return sliceResult[el[2] - 1];
  });

  return answer;
}
