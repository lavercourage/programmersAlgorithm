// 문제 주소
// 최대공약수와 최소공배수
// https://programmers.co.kr/learn/courses/30/lessons/12940

// 코드
const solution = (n, m) => {
  let answer = [];
  const great = [];
  // 최대공약수
  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      great.push(i);
    }
  }
  answer[0] = Math.max(...great);

  // 최소공배수
  for (let j = m; j <= n * m; j += m) {
    if (j % n === 0) {
      answer[1] = j;
      break;
    }
  }
  return answer;
};

// 기타
// 최대공약수 : 두 수의 약수 중에서 제일 큰 수
// 최소공배수 : 두 수의 배수 중에서 제일 작은 수
