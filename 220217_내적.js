// 문제 주소
// 내적
// https://programmers.co.kr/learn/courses/30/lessons/70128

// 코드 for
const solution = (a, b) => {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
};

// 코드2 map + reduce
const solution = (a, b) => {
  const result = a
    .map((num, i) => {
      return num * b[i];
    })
    .reduce((el, cu) => {
      return el + cu;
    }, 0);

  return result;
};
