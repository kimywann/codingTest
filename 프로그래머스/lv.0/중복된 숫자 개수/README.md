# 중복된 숫자 개수
***

```
function solution(array, n) {
    
    let result = 0;

    for (i = 0; i <= array.length; i++) {
        if(array[i] === n){
            result++
        } else {
            return result
        }
    }
}
```
### 첫 번째 코드의 문제점:
- __문제점:__ 이 코드에서는 else 부분에서 return result를 호출하고 있습니다. array[i]가 n과 같지 않은 값을 처음으로 만나면 그 즉시 함수가 종료되고 result가 반환됩니다. 

예를 들어, array = [1, 2, 3, 4], n = 1일 경우, 첫 번째 1을 만나고 result가 1이 되지만 두 번째 값 2를 만나면 바로 함수가 종료되면서 result를 반환합니다. 배열 전체를 순회하지 않고 중간에 멈춰버립니다. 

- __테스트케이스 통과 이유:__ [1, 1, 2, 3, 4, 5], n = 1이 입출력 예이기 때문에 위 코드가 통과하는 것처럼 보였습니다.

***
### 두 번째 코드
```
function solution(array, n) {
    
    let result = 0;

    for (i = 0; i < array.length; i++) {
        if(array[i] === n){
            result++
        } 
    }
    return result
}
```
- __문제 해결:__ 이 코드에서는 else 없이, 단순히 array[i] === n 일 때만 result++를 실행하고 배열을 끝까지 순회한 후에 result를 반환합니다. 따라서 모든 값을 비교할 수 있습니다.

***
## 알아두면 좋습니다!


### 마지막 요소의 인덱스는 배열의 길이에서 1을 뺀 값이다
- 배열의 길이(length)는 배열이 몇 개의 요소를 가지고 있는지를 나타냅니다.
- 예를 들어, [10, 20, 30] 배열의 길이는 3입니다.
- 그러나 배열의 인덱스는 0부터 시작하므로, 마지막 요소의 인덱스는 배열의 길이에서 1을 뺀 값인 2가 됩니다.

### array.length의 역할과 배열 순회
```
let array = [10, 20, 30];

// 배열 순회 예시
for (let i = 0; i < array.length; i++) { // 배열의 길이만큼 순회
    console.log(array[i]); // 각 요소를 출력
}
// 출력: 10, 20, 30
```