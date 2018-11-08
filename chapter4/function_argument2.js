// arguments 객체 예제 코드
function add(a,b){
    // argument 객체 출력
    console.dir(arguments);
    return a+b;
}

console.log(add(1));        // (출력값) NaN
console.log(add(1,2));      // (출력값) 3
console.log(add(1,2,3));    // (출력값) 3

