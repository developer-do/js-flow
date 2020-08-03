var obj = {
    a: 1,
    b: function bb() {
        console.log(this);
    },
    c: function() {
        console.log(this.a);
    }
};

obj.b();
obj.c();

console.dir(obj.b);
console.dir(obj.c);



/**
 * 0. 전역 실행 컨텍스트 생성 [GLOBAL]
 * [전역 컨텍스트]
 * {
 *      1. 변수 obj 선언
 *      2. 객체 생성 / 변수 obj에 객체 주소값 할당
 *      3. obj.b 메소드 호출 -> obj.b 실행 컨텍스트 생성
 *      [obj.b 실행 컨텍스트]
 *      {
 *          4. this에 obj 바인딩
 *          5. this 출력
 *      }
 *      6. obj.b 실행 컨텍스트 종료
 * 
 *      [obj.c 실행 컨텍스트]
 *      {
 *          7. this에 obj 바인딩
 *          8. obj안에 a 프로퍼티 값 참조해서 a 값 1 출력
 *      }
 *      9. obj.c 실행 컨텍스트 종료
 * }
 * 10. 전역 실행 컨텍스트 종료
 */