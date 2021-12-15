//6. 홀수
/* 
7개의 자연수 중 홀수 자연수를 모두 골라 그 합을 구하고,
고른 홀수 중 최솟값을 찾는 프로그램을 작성하세요

예시)
12, 77, 38, 41, 53, 92, 85

합 : 256
최솟값 : 41

*/
function solution(arr) {
  let answer
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x
      if (x < min) min = x
    }
  }
  answer.push(sum)
  answer.push(min)
  return answer
}

arr = [12, 77, 38, 41, 53, 92, 85]
console.log(solution(arr))
