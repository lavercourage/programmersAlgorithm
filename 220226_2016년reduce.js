// 문제 주소
// 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901

// 코드
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const days = new Array(a).fill(1).reduce((acc, cur, i) => {
    const date = cur + i;
    return (
      acc +
      (date !== a
        ? // 이전 월수일 경우
          month[date]
        : // 해당 월수일 경우 (= a 와 동일한 월수)
          b - 1)
    );
  }, 0);
  return week[days % 7];
}
