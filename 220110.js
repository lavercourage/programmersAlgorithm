// 문제 주소
// 서울에서 김서방 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12919

// 코드
function solution(seoul) {
  // Kim 의 index 값을 담아주는 변수
  let x = 0;
  // i = i + 1
  for (let i = 0; i < seoul.length; i++) {
    console.log(seoul[i], i);
    if (seoul[i] === "Kim") {
      x = i;
      // 반복문을 종료
      break;
    }
  }
  return "김서방은 " + x + "에 있다";
}

// 코드2
function solution(seoul) {
  // Kim 의 index 값을 담아주는 변수
  let x = seoul.indexOf("Kim");

  return "김서방은 " + x + "에 있다";
}
