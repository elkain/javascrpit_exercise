function A(arg){
    if(!(this instanceof arguments.callee)){
        return new arguments.callee(arg);
    }
    this.value = arg ? arg:0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);       // (출력값) 100
console.log(b.value);       // (출력값) 10
console.log(window.value);  // (출력값) undefinde
