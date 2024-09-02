// 처음에 혼자 생각한 풀이
function solution(angle) {
    
    let result
    
    if (angle < 90) {
        result = 1
    } else if (angle === 90) {
        result = 2
    } else if (90 < angle < 180) { // angle > 90 && angle < 180처럼 논리 연산자를 사용해야 올바르게 작동
        result = 3 
    } else if (angle === 180) {
        result = 4
    } 
    return result
}


// 올바른 풀이

function solution(angle) {
    
    let result
    
    if (angle < 90) {
        result = 1
    } else if (angle === 90) {
        result = 2
    } else if (angle > 90 && angle < 180) {
        result = 3 
    } else if (angle === 180) {
        result = 4
    } 
    return result
}


// 다른 풀이

//삼항 연산자
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

//후위 증가 연산자
function solution(angle) {
    let answer = 1;

    if (angle >= 90) answer++;
    if (angle > 90) answer++;
    if (angle >= 180) answer++;
    if (angle > 180) answer++;

    return answer;
}