var arr = ['zero', 'one', 'two', 'three'];

delete arr[2];

console.log(arr);           // (출력값) ["zero", "one", undefined, "three"]
console.log(arr.length);    // (출력값) 4

