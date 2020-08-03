// 기본형 데이터 타입 
var a;
a = 10;

console.log(a);

var b = 'abc';
b = false;

console.log(b);

var c = b;
c = 20;

console.log(c);
console.log(b);

console.clear();

// 참조형 데이터 타입
var obj = {
    a: 1,
    b: 'b'
};

console.log("obj",obj);
console.log("obj.a",obj.a);
console.log("obj.b",obj.b);

var obj2 = obj;

console.log(obj2);
obj2.a = 10;

console.log(obj);
console.log(obj2);


// 네스티드 데이터 (참조형 안에 참조형이 있는 데이터들)
var obj3 = {
    a: [4, 5, 6]
};

obj3.a = "new";
// 기존의 obj3.a에 있는 데이터들은 가비지 컬렉터에 의해 삭제된다.