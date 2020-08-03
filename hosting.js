/* 
    호이스팅 되는 방식
    function a() {
        return 'a';
    }
    var b;
    var c;
*/

console.log(a());
// console.log(b());
// console.log(c());

// 함수 선언문
function a() {
    return 'a';
}

// 기명 함수 표현식
var b = function bb() {
    return 'bb';
}

// (익명) 함수 표현식
var c = function() { // 변수 선언
    return 'c';      // 익명함수 선언
}                    // 변수 c에 익명함수를 할당


// 함수 선언문 대신 함수 표현식을 권한다.

/* function sum(a, b) {
    return a + " + " + b + " = " + (a + b);
}
console.log(sum(1,2));

function sum(a, b) {
    return a + b;
}

console.log(sum(3,4)); */

var sum = function(a, b) {
    return a + " + " + b + " = " + (a + b);
}
console.log(sum(1,2));

var sum = function(a, b) {
    return a + b;
}
console.log(sum(3,4));