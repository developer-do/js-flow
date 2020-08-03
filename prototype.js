function Person(n, a) {
  this.name = n;
  this.age = a;
}

var gomu = new Person('고무곰', 30);
var gomuClone1 = new gomu.__proto__.constructor("고무곰_클론1", 10);

var gomuClone2 = new gomu.constructor("고무곰_클론2", 25);

var gomuProto = Object.getPrototypeOf(gomu);
var gomuClone3 = new gomuProto.constructor("고무곰_클론3", 20);

var gomuClone4 = new Person.prototype.constructor("고무곰_클론4", 15);

console.log(gomuClone1);
console.log(gomuClone2);
console.log(gomuProto);
console.log(gomuClone3);
console.log(gomuClone4);