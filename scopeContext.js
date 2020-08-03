// 스코프는 함수가 정의될때 결정되며,
// 실행 컨텍스트는 함수가 실행 될때 생성된다.

// 실행 컨텍스트에는 호이스팅, this 바인딩 등의 정보가 담긴다.

var a = 1;  
function outer() {
    console.log("a(1)", a); // a = 1;

    function inner() {
        console.log("a(2)", a); // a = undefined;
        var a = 3;
    }
    inner();

    console.log("a(3)", a); // a = 1;
}
outer();
console.log("a(4)", a); // a = 1;

/**
 * 전역 실행 컨텍스트 생성 [GLOBAL]
 * [전역 컨텍스트] 
 * {
 *      1. 변수 a 선언
 *      2. 함수 outer 선언 [GLOBAL > outer]
 *      3. 변수 a에 1 할당
 *      4. outer함수 호출 -> outer 실행 컨텍스트 생성
 *      [outer 컨텍스트] 
 *      {
 *          5. 함수 inner 선언 [GLOBAL > outer > inner]
 *          6. outer scope에서 a 탐색 -> global scope에서 a 탐색 -> 1출력
 *          7. inner 함수 호출 -> inner 실행 컨텍스트 생성
 *          [inner 컨텍스트]
 *          {
 *              8. 변수 a 선언
 *              9. inner scope에서 a 탐색 -> undefined 출력
 *              10. 변수 a에 3 할당
 *          }
 *          11. inner 실행컨텍스트 종료
 *          12. outer scope에서 a 탐색 -> global scope에서 a 탐색 -> 1 출력
 *      }
 *      13. outer실행 컨텍스트 종료
 *      14. global scope에서 a 탐색 -> 1 출력
 * }
 * 15. 전역 실행 컨텍스트 종료
 */