var arr = ['bar'];
var obj = { name : 'foo', length:1};

arr.push('baz');
console.log(arr); // (출력값) ['bar', 'baz'];

//obj.push('baz');  // (츨력값) error

// 유사 배열 객체 에서 apply() 를 활영한 배열 메서드 호출
Array.prototype.push.apply(obj, ['baz']);
console.log(obj);   // (출력값) {'1':'baz', name:'foo', length:2}
