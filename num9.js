//9. A를 #으로
//대문자로 이루어진 영어단어가 입력되면 단어가 포함된 'A'를 모두
// '#'으로 바꾸어 출력하는 프로그램을 작성하세요.

// function solution(s) {
//   let answer = ''

//   for (let x of s) {
//     // console.log(x) 문자 하나씩이 출력됨
//     if (x === 'A') answer += '#'
//     //문자열 추가
//     else answer += x
//   }
//   return answer
// }

/* replace */
function solution(s) {
  let answer = s
  answer = answer.replace(/A/g, '#')
  return answer
}

let str = 'BANANA'
console.log(solution(str))
