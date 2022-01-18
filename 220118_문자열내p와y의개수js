// 문제 주소
// 문자열 내 p와 y의 개수
// https://programmers.co.kr/learn/courses/30/lessons/12916

// 코드
function solution(s) {
  const textArray = {
    p: 0,
    y: 0,
  };

  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "y") {
      // textArray[s[i]] = textArray[s[i]] + 1;
      textArray[s[i]] += 1;
    }
  }

  return textArray.p === textArray.y;
}

// 코드2
function solution(s) {
  const abc = {};
  const result = s
    .toLowerCase()
    .split("")
    .forEach((str) => {
      abc[str] === undefined ? (abc[str] = 1) : (abc[str] += 1);
    });
  return abc.p === abc.y;
}
