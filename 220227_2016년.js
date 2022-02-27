// 문제 주소
// 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901

// 코드
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const solution = (a, b) => {
  const days = new Date(2016, a - 1, b).getDay();
  return week[days];
};

// 느낀점
// getDay() 메서드
// 주어진 날짜의 현지 기준 요일 반환
// 0 = 일요일
// 오늘 일 반환 => Date.prototype.getDate() 사용하기
