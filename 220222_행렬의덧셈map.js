// 문제 주소
// 행렬의 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/12950

// 코드

// arr1             arr2            return
// [[1,2],[2,3]]    [[3,4],[5,6]]   [[4,6],[7,9]]
// [[1],[2]]        [[3],[4]]       [[4],[6]]

const solution = (arr1, arr2) => {
  const answer = arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      return num2 + arr2[i][l];
    });
  });
  return answer;
};
