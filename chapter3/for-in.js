// 객체 리터럴을 이용한 foo 객체 생성
var foo = {
    name:'foo',
    age: 30,
    major : 'computer science'
};

// foo in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo){
    console.log(prop, foo[prop]);
}