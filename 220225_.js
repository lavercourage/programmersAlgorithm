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
  let answer = "";
  let days = 0;

  for (let i = 1; i < a; i++) {
    days += month[i];
  }
  days += b - 1;

  answer = week[days % 7];

  return answer;
}
