// 문제 주소
// 행렬의 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/12950

// 코드

// arr1             arr2            return
// [[1,2],[2,3]]    [[3,4],[5,6]]   [[4,6],[7,9]]
// [[1],[2]]        [[3],[4]]       [[4],[6]]

const solution = (arr1, arr2) => {
  let answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let l = 0; l < arr1[i].length; l++) {
      // => [1,2],[2,3]
      // 배열의 각각의 위치에 있는 정수들을 더하고 결과값을 저장하기
      const sum = arr1[i][l] + arr2[i][l]; // 1: 1+3, 2: 2+4, 3: 2+5, 4: 3+6

      if (answer[i] === undefined) {
        answer[i] = [];
      }

      answer[i][l] = sum;
    }
  }
  return answer;
};

// 느낀점
// arr1[i][l] 의 배열을 사용함에 있어 이해하기가 힘들었는데,
// js에는 존재하진 않지만 2차원배열, 다차원배열 같은 비슷한 문법이 있다는 것을 알았다.
