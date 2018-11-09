// return 문 없는 일반 함수의 리턴값 확인

// noReturnFunc() 함수
var noReturnFunc = function(){
    console.log('This fucntion has no return statement');
};

var result = noReturnFunc();
console.log(result);        // undefined return
