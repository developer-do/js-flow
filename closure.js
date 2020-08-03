// 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
// lexical environment 선언 당시의 환경에 대한 정보를 담는 객체 ( 구성 환경 )
// 클로저는 함수와 '그 함수가 선언될 당시의 환경정보' 사이의 조합이다.( 스코프 )
// 클로저는 스코프와 아무 밀접한 관계를 가진다.
// 클로저란 함수 내부에서 생성한 데이터와 그 유효범위로 인해 발생하는 특수한 현상 / 상태를 의미한다.

// 접근권한 제어, 지역변수 보호
/* function a() {
    var x = 1;
    return function b() {
        console.log(x);
    }
}
var c = a();
c(); */


// 지역변수 보호
function a() {
    var _x = 1;
    return {
        get x() {
            return _x;
        },
        set x(v) {
            _x = v;
        }
    }
}


/**********************/
var c = a();
console.log(c.x);
c.x = 10;
console.log(c.x);


function setName(name) {
    return function() {
        return name;
    }
}

var sayMyName = setName('고무곰');
sayMyName();

/**
 * !!!!! 스코프는 정의될 때 결정된다.
 * 
 * 0. 전역 실행 컨텍스트 생성 [GLOBAL]
 * [전역 컨텍스트]
 * {
 *     1. 함수 setName 선언 [GLOBAL > setName]
 *     2. sayMyName 선언
 *     3. setName('고무곰') 호출 -> setName 실행 컨텍스트 생성
 *     [setName 컨텍스트]
 *     {
 *         4. 지역변수 name 선언 및 '고무곰' 할당
 *         5. 익명함수 선언 [GLOBAL > setName > unnamed]
 *         6. 익명함수 반환
 *     }
 *     7. setName 실행 컨텍스트 종료
 *     8. 변수 sayMyName에 반환된 함수를 할당
 *     9. sayMyName 호출 -> sayMyName 실행 컨텍스트 생성
 *     [sayMyName 컨텍스트]
 *     {
 *         10. unnamed scope에서 name 탐색 -> setName에서 name탐색 -> '고무곰' 반환
 *     }
 *     11. sayMyName 실행 컨텍스트 종료
 * }
 * 12. 전역 실행 컨텍스트 종료
 */

// 

function setCounter() {
    var count = 0;
    return function() {
        return ++count;
    }
}

var count = setCounter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

/* 
    1. setCounter 정의 [GLOBAL > setCounter]
    2. setCount 실행
    3. setCount 스코프에 count 변수 선언 및 할당
    4. 익명함수 정의 및 반환 [GLOBAL > setCounter > 익명]
    5. 반환된 익명함수를 변수 count에 할당
    6. count 실행
    7. 익명함수 스코프에서 count 탐색 -> setCounter 스코프에서 count 탐색 -> count에 1을 증가시킨 값을 반환 
*/