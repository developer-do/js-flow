// 전역공간에서의 this

    // 브라우저 콘솔에서
    console.log(this); // window 전역객체

    // node.js에서 
    console.log(this); // GLOBAL 전역객체


// 함수내부에서의 this

    function a () {
        console.log(this);  // 전역객체
    }
    a();

    function b() {
        function c() {
            console.log(this);  // 전역객체
        }
        c();
    }
    b();

    var d = {
        e: function() {
            function f() {
                console.log(this);  // 전역객체
            }
            f();
        }
    }
    d.e();


// 메소드 호출 시 - 메소드 호출 주체 (메소드명 앞)

    var a = {
        b: function() {
            console.log(this); // 주체를 가리킴 object b function
        }
    }
    a.b(); 

    var a = {
        b: {
            c: function() {
                console.log(this);  // 주체를 가리킴 object c function 
            }
        }
    }
    a.b.c();

// 내부함수에서의 우회법
var a = 10;
var obj = {
    a: 20,
    b: function() {
        var self = this;
        console.log(this.a);

        function c() {
            console.log(self.a);
        }
        c();
    }
}

obj.b();

// callbak에서 - 기본적으로는 함수 내부에서와 동일

    // call, apply, bind 내장 메서드에대해 알아보자
    /**
     * func.call(thisArg[, arg1[, arg2 [, ...]]])
     * func.apply(thisArg, [argsArray])
     * func.apply(thisArg[, arg1[, arg2 [, ...]]])
     */
    var a = function(x, y, z) {
        console.log(this, x, y, z);
    }

    var b = {
        c: 'eee'
    };

    a.call(b, 1, 2, 3);

    a.apply(b, [1, 2, 3]);

    var c = a.bind(b);
    c(1, 2, 3);

    var d = a.bind(b, 1, 2);
    d(3);

console.clear();


// 콜백 함수에서의 this

    var callback = function() {
        console.dir(this);  // call, apply, bind를 사용하지 않았을 때 window
    };
    callback();

    var obj = {
        a: 1,
        b: function(cb) {
            cb.call(this);
        }
    };
    obj.b(callback);

    var callback = function() {
        console.dir(this);
    };

    var obj = {
        a: 1
    };

    setTimeout(callback.bind(obj), 100);

    document.body.innerHTML += "<div id='a'>클릭하세요.</div>";
    var obj = {
        a: 1,
        b: function() {
            alert("가즈아!!");
        }
    };
    
    document.getElementById("a")
        .addEventListener('click', function() {
            console.dir(this.b());
        }.bind(obj));

    document.getElementById("a")
        .addEventListener('mouseover', function() {
            console.dir(this);
        });

// 정리

/**
 * 기본적으로 함수의 this와 같다.
 * 제어권을 가진 함수가 callback의 this를 명시한 경우 그에 따른다.
 * 개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따른다.
 */


// 생성자 함수에서 this는 인스턴스를 가리킨다.
function Person(n, a) {
    this.name = n;
    this.age = a;
}

var gomugom = new Person('고무곰', 30);
console.log(gomugom);


// 전역공간 - window / global
// 함수 내부에서 - window / global
// 메소드 호출 시 - 메소드 호출 주체 (메소드명 앞)
// callback에서 - 기본적으로는 함수 내부에서와 동일하지만 apply, call, bind를 이용하여 this가 가리키는 주체를 변경할 수 있다.
// 생성자 함수에서 - 인스턴스