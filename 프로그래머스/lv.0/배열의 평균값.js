//나의 풀이
function solution(numbers) {
    var answer = numbers.reduce((a, b) => {
        return a + b;
    }, 0);
    
    let result = answer / numbers.length;
    return result
}



//reduce 함수에 전달되는 파라미터 a, b 값을 
//accumulator와 currentValue로 지었으면 더 좋았을 듯.