// 함수 표현식 : function literal 로 하나의 함수를 만들고 여기서 생성된 함수를 변수에 할당하여 함수를 생성하는 것

// add() 함수 표현식
var add = function(x,y) {
    return x+y;
};

var plus = add;

console.log(add(3,4));          // (출력값) 7
console.log(plus(5,6));         // (출력값) 11

