/* 
    호이스팅 되는 방식
    function a() {
        return 'a';
    }
    var b;
    var c;
*/

console.log(a());
console.log(b());
console.log(c());

function a() {
    return 'a';
}

var b = function bb() {
    return 'bb';
}

var c = function() {
    return 'c';
}


