/**
 * callback
 * call = 부르다 
 * back = 되돌리다.
 * something will call this function back
 * 무언가가 이 콜백함수를 어떤 방식인지 언제 호출할지 난 모르지만 어쨋든 실행해서 나에게 다시 돌려줄거야
 * 콜백함수 - 제어권을 넘겨준다.
 */

var cnt = 0;
// setInterval(function() {
//     cnt++;
//     console.log(cnt);
// }, 1000);


// var cb = function() {
//     cnt++;
//     console.log(cnt + "초가 지났습니다.");
// }

// setInterval(cb, 1000);

var arr = [1,2,3,4,5];
var arr2 = [10, 20, 30, 40, 50];
var entries = [];
arr.forEach(function(v, i) {
    // console.log(i, v, this[i]);
    entries.push([i, v, this[i]]);
}, arr2);

// forEach함수 만들기
Array.prototype.forEach2 = function(callback, thisArg) {
    var self = thisArg || this;
    for(var i = 0; i < this.length; i++) {
        callback.call(self, this[i], i, this);
    }
}


console.log(entries);


var arr = [1,2,3,4,5];
arr.forEach(function(index, value) {
    console.log(index, value);
});



/**
 * 콜백함수의 특징
 * - 다른 함수(A)의 매개변수로 콜백함수(B)를 전달하면, A가 B의 제어권을 갖게된다.
 * - 특별한 요청(bind)이 없는 한 : A에 미리 정해진 방식에 따라 B를 호출한다.
 * - 미리 정해진 방식이란 this에 무엇을 바인딩 할지, 매개변수에는 어떤 값을들 지정할지, 어떤 타이밍에 콜백을 호출할 지 등이다.
 * - 콜백은 함수다!
 */


var arr = [1,2,3,4,5];
var obj = {
    vals: [1,2,3],
    logValues: function(v, i) {
        if(this.vals) {
            console.log(this.vals, v, i);
        } else {
            console.log(this, v, i);
        }
    }
};

obj.logValues(1,2);
arr.forEach(obj.logValues);