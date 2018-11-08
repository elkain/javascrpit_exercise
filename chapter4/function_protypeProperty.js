// 함수 객체와 프로토 타입 객체와의 관계를 보여주는 코드
// MyFunction() 함수 정의
function MyFunction(){
    return true;
}

console.dir(MyFunction.prototype);
console.dir(MyFunction.prototype.constructor);