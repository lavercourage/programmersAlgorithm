// 문제 주소
// 하샤드 수
// https://programmers.co.kr/learn/courses/30/lessons/12947

// 코드
const solution = (x) => {
  return x %
    x
      .toString()
      .split("")
      .reduce((el, aa) => {
        return Number(el) + Number(aa);
      }) ===
    0
    ? true
    : false;
};
