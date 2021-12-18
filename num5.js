// 최솟값
//여러 수 중 최솟값 구하기

//가장 큰 수로 미리 초기화 하기
//가장 안정적인 수로 초기화됨
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i]
  }
  answer = min
  return answer
}

//내장 함수 사용 - 전개 연산자 이용 ...arr
function solution2(arr) {
  let answer
  answer = Math.min(...arr)
  return answer
}

let arr = [4, 5, 3, 2, 9]
console.log(solution2(arr))

// let arr = [21, 24, 25, 63, 19, 24]
// console.log(solution(arr))
