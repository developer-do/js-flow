function Person(n, a) {
  this.name = n;
  this.age = a;
}

Person.prototype.age = 100;

Person.prototype.setOlder = function() {
  this.age += 1;
}

Person.prototype.getAge = function() {
  return this.age;
}


var gomu = new Person("고무곰", 30);
var iu = new Person("아이유", 25);

gomu.setOlder;
console.log(gomu.getAge());

gomu.__proto__.setOlder();
console.log(gomu.__proto__.getAge());




/*
  중복되는 부분 제거하기
  gomu.setOlder = function() {
    this.age += 1;
  }

  gomu.getAge = function() {
    return this.age;
  }

  iu.setOlder = function() {
    this.age += 1;
  }

  iu.getAge = function() {
    return this.age;
  }
*/