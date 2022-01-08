// 문제 주소
// 직사각형 별찍기
// https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript

// 코드
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    let result = "";
    for (let j = 0; j < a; j++) {
      result = result + "*";
    }
    console.log(result);
  }
});
