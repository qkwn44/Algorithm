// 8. 일곱 난쟁이
//9명 모두 난쟁이가 백설공주와 일곱 난쟁이의 주인공이라고 주장한다.
// 이때 가짜 난쟁이 2명을 찾으세요.

// 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다.
// 주어지는 키는 100을 넘지 않는 자연수이며
//아홉난쟁이의 키는 모두 다르며, 가능한 정답이 여러가지인 경우에는 아무거나 출력한다.

//문제 이해
//이중 for문을 돌면서 각각의 원소들을 모두 비교해봐야한다.
// 모든 원소의 합은 sum으로 지정
//sum에서 두개의 element의 값을 뺐을 때 값이 100이 되면 가짜 난쟁이 색출 성공

function solution(arr) {
  let answer = arr //얕은 복사
  let sum = arr.reduce((a, b) => a + b, 0) //a값을 0으로 초기화 생략 가능
  console.log(arr)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // let j = i + 1; i 다음의 값 부터 순서 시작
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1)
        arr.splice(i, 1) //특정 i 값 하나 제거

        //splice로 인해 i 요소를 먼저 지워버리면 j의 배열이 -1로 당겨지기 때문에
        //j의 값을 먼저 지워야 한다.
      }
    }
  }
  return answer
}

//내 풀이
// function solution() {
//   let answer
//   let sum = arr.reduce((a, b) => a + b)
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (sum - (arr[i] + arr[j]) == 100) {
//         arr.splice(i, 1)
//         arr.splice(j, 1)
//       }
//     }
//   }
//   return answer
// }

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]

console.log(solution(arr))
