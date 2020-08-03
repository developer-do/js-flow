var arr = [1, 2, 3];
/* arr.toString = function() {
  return this.join('_');
} */
Array.prototype.toString = function() {
  return '[' + this.join(', ') + ']';
}
console.log(arr.toString());
console.log(arr.__proto__.toString.call(arr));
console.log(arr.__proto__.__proto__.toString.call(arr));


var obj = {
  a: 1,
  b: {
    c: 'c'
  },
  d: [5, 6, 7],
  e: function() {}
  /* toString: function() {
    var res = [];
    for(var key in this) {
      res.push(key + ": " + this[key].toString());
    }
    return '{' + res.join(', ') + '}';
  } */
};

Object.prototype.toString = function() {
  var res = [];
  for(var key in this) {
    res.push(key + ": " + this[key].toString());
  }
  return '{' + res.join(', ') + '}';
}

console.log(obj.toString());