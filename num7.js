//10부제
/* 
자동차 번호의 일의 자리 숫자와
날짜의 일의 자리 숫자가 동일한 프로그램을 작성하세요
*/
function solution(day, arr) {
  let answer = 0
  for (let x of arr) {
    if (x % 10 === day) {
      answer++
    }
    return answer
  }

  return answer
}
//10으로 숫자를 나누게 되면
//나머지는 무조건 해당 숫자의 일의 자리가 나머지로 떨어지게 된다.

arr = [25, 23, 11, 47, 53, 17, 33]
console.log(solution(3, arr))
