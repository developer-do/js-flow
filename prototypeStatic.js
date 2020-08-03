function Person(name, age) {
  this._name = name;
  this._age = age;
}

// static method
Person.getInfomations = function(instance) {
  return {
    name: instance._name,
    age: instance._age
  };
}


// method
Person.prototype.getName = function() {
  return this._name;
}

// method
Person.prototype.getAge = function() {
  return this._age;
}

var gomu = new Person('고무', 30);
console.log(gomu);
console.log(gomu.getName());
console.log(gomu.getAge());

console.log(Person.getInfomations(gomu));

