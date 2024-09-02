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

///////////////////////////////////////
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