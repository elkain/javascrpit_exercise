function A(arg){
<<<<<<< HEAD
    if(!(this instanceof arguments.callee)){
        return new arguments.callee(arg);
=======
    if(!(this instanceof A)){
        return new A(arg);
>>>>>>> ee261ea6ad2ce94664bf2d34b4d8e12686eb7c21
    }

    this.value = arg ? arg:0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);       // (출력값) 100
console.log(b.value);       // (출력값) 10
<<<<<<< HEAD
console.log(window.value);  // (출력값) undefinde
=======
console.log(global.value);  // (출력값) undefinde
>>>>>>> ee261ea6ad2ce94664bf2d34b4d8e12686eb7c21
