// 문제 주소
// 하샤드 수
// https://programmers.co.kr/learn/courses/30/lessons/12947

// 코드
const solution = (x) => {
  let sum = 0;
  x.toString()
    .split("")
    .forEach((num) => {
      sum += Number(num);
    });

  return x % sum === 0 ? true : false;
};
