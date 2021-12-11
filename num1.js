//1. 세 수 중 최댓값
//100이하의 세 자연 수 중 가장 큰 수를 출력하세요

/*
6 5 11
> 5
*/

//차근차근
function solution2(a, b, c) {
  let result
  if (a > b) {
    result = a
  } else {
    result = b
  }
  if (result > c) {
    result = result
  } else {
    result = c
  }
  return result
}
console.log(solution2(344, 23, 423))

//삼항연산자를 이용한 간단한 풀이
function solution(a, b, c) {
  let answer
  a > b ? (answer = a) : (answer = b)
  answer > c ? answer : (answer = c)
  return answer
}
console.log(solution(6, 5, 11))

//for문 이용 2
let arr = [1, 2, 3, 4, 5, 6, 7]
function findMinNum(arr) {
  //initial value를 인자의 첫번째 index 값으로 설정

  let minNum = arr[0]
  let length = arr.length
  //for문을 돌며 값을 minNum과 비교 후 적은 수를 minNum에 대입
  for (let i = 0; i < length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i]
    }
  }
  return minNum
}

// Math.min()
//Math.min() 메소드를 이용하면 쉽게 최소값을 구할 수 있다.
console.log(Math.max(34, 53, 23))

//내장함수 + Math.min()
// spread operator : 배열,문자열들을 풀어서 요소 하나 하나로 전개
//반복 가능한(iterable) 객체에 적용하는 문법
//spread operator로 전개 시킨 후 그 중 max 값을 뽑아 출력
let arr2 = [3, 7, 5]
function findMinNum2(arr2) {
  return Math.max(...arr2)
}
console.log(findMinNum2(arr2))
