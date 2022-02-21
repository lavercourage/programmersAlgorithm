// 문제 주소
// 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935

// 코드
const solution = (arr) => {
  const min = Math.min(...arr);
  const result = arr.filter((num) => {
    return num > min;
  });
  return result.length === 0 ? [-1] : result;
};

// 스프레드 연산자를 이용한 제일 작은 수 찾기
// const min = Math.min(...arr);

// 배열내의 최소값 찾기
// const min = Math.min.apply( null, arr );

// 배열내의 최대값 찾기
// const min = Math.min.apply( null, arr );
// null 을 첫번째 인자로 사용 => context는 window 객체
