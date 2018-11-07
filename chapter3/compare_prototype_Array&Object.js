var emptyArray = [];        // 배열 리터럴을 통해 빈 배열 생성
var emtpyObj = {};          // 객체 리터럴을 통해 빈 객체 생성

console.dir(emptyArray.__proto__);      // 배열의 프로토타입(Array.prototype) 출력
console.dir(emtpyObj.__proto__);        // 객체의 프로토타입(Object.prototype) 출력
